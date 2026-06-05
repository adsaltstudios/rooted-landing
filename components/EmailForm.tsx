'use client';

import { useState } from 'react';

export function EmailForm({ id, ctaLabel = 'Join the waitlist' }: { id?: string; ctaLabel?: string }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="email-success" id={id}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#6E8E65" strokeWidth="1.6"/>
          <path d="M6 10.5l3 3 5.5-6" stroke="#6E8E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        You&apos;re on the list. We&apos;ll be in touch gently.
      </div>
    );
  }

  return (
    <>
      <form className="email-form" onSubmit={submit} id={id}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          aria-label="Email address"
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Joining…' : ctaLabel}
        </button>
      </form>
      {error
        ? <div className="email-error">{error}</div>
        : <div className="email-form-meta">No spam. One short note per month, at most.</div>
      }
    </>
  );
}
