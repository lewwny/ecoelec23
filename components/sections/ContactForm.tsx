'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { sendContactForm, type ContactFormState } from '@/app/actions'

const initialState: ContactFormState = { status: 'idle' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-light disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
          Envoi en cours…
        </>
      ) : (
        <>
          <Send className="w-5 h-5" aria-hidden="true" />
          Envoyer le message
        </>
      )}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <div className="bg-white rounded-2xl border border-earth-dark shadow-sm p-6 sm:p-8 relative overflow-hidden">
      {/* Success overlay */}
      <div
        aria-hidden={state.status !== 'success'}
        className={`absolute inset-0 bg-white flex items-center justify-center p-8 transition-all duration-500 ${
          state.status === 'success'
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center animate-scale-in">
          <div className="bg-mint-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 animate-success-pop">
            <CheckCircle2 className="w-12 h-12 text-emerald" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-forest mb-2">Message envoyé !</h3>
          <p className="text-forest/70 text-sm max-w-sm">{state.message}</p>
        </div>
      </div>

      <form ref={formRef} action={formAction} noValidate className="space-y-4">
        <h3 className="text-xl font-bold text-forest mb-1">Nous écrire</h3>
        <p className="text-sm text-forest/60 mb-5">
          Réponse sous 24h. Pour une urgence, appelez directement.
        </p>

        {/* Honeypot anti-spam */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] opacity-0"
          aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-forest/70 mb-1.5">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full px-4 py-2.5 rounded-xl border border-earth-dark bg-cream focus:bg-white focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-forest/70 mb-1.5">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-4 py-2.5 rounded-xl border border-earth-dark bg-cream focus:bg-white focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-forest/70 mb-1.5">
            Téléphone <span className="text-forest/40 font-normal">(facultatif)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-2.5 rounded-xl border border-earth-dark bg-cream focus:bg-white focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all text-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-forest/70 mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            className="w-full px-4 py-2.5 rounded-xl border border-earth-dark bg-cream focus:bg-white focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all text-sm resize-none"
          />
        </div>

        {/* Error message */}
        <div
          aria-live="polite"
          className={`overflow-hidden transition-all duration-300 ${
            state.status === 'error'
              ? 'max-h-20 opacity-100 animate-shake'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{state.message}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          <p className="text-xs text-forest/50">
            En envoyant, vous acceptez notre{' '}
            <a href="/politique-confidentialite" className="underline hover:text-emerald">
              politique de confidentialité
            </a>
            .
          </p>
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}
