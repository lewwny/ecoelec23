'use server'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get('website') ?? '')
  if (honeypot) {
    return { status: 'success' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Merci de remplir les champs obligatoires.' }
  }
  if (!EMAIL_REGEX.test(email)) {
    return { status: 'error', message: 'Adresse e-mail invalide.' }
  }
  if (message.length < 10) {
    return { status: 'error', message: 'Votre message doit contenir au moins 10 caractères.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL ?? 'contact@ecoelec23.fr'

  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Eco Elec 23 <contact@ecoelec23.fr>',
          to: [to],
          reply_to: email,
          subject: `Nouveau message de ${name}`,
          text: `Nom : ${name}\nE-mail : ${email}\nTéléphone : ${phone || '—'}\n\n${message}`,
        }),
      })
      if (!res.ok) throw new Error('resend_failed')
    } catch {
      return {
        status: 'error',
        message: "Impossible d'envoyer le message. Veuillez réessayer ou nous appeler.",
      }
    }
  } else {
    console.log('[Contact form]', { name, email, phone, message })
  }

  return {
    status: 'success',
    message: 'Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.',
  }
}
