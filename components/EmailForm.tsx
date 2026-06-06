'use client';

import { useState, useId, useRef, useEffect } from 'react';

export function EmailForm({ id, ctaLabel = 'Hold my spot' }: { id?: string; ctaLabel?: string }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [alreadyIn, setAlreadyIn] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputId = useId();
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so keyboard / screen-reader users aren't
  // dropped to the top of the page when the form swaps to the success state.
  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Please enter a valid email.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      });
      if (res.status === 409) {
        // Already on the list: reassure, don't alarm.
        setAlreadyIn(true);
        setSubmitted(true);
      } else if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Something went wrong. Try again.');
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id={id} ref={successRef} tabIndex={-1} style={{ outline: 'none' }}>
        <div className="email-success" role="status">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M6 10.5l3 3 5.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {alreadyIn
            ? "You're already on the list. We've got you."
            : "You're on the list. We'll be in touch gently."}
        </div>
        <button type="button" className="email-reset" onClick={() => { setSubmitted(false); setAlreadyIn(false); setEmail(''); }}>
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <>
      <form className="email-form" onSubmit={submit} id={id} action="/api/waitlist" method="post">
        <label htmlFor={inputId} className="sr-only">Email address</label>
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Joining…' : ctaLabel}
        </button>
      </form>
      {error
        ? <div className="email-error" role="alert">{error}</div>
        : <div className="email-form-meta">No spam. One short note per month, at most.</div>
      }
    </>
  );
}
