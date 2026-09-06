import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { useFetch } from '../lib/useFetch';
import type { Program } from '../lib/types';

interface InquiryFormProps {
  source: 'admissions' | 'contact';
  heading?: string;
}

export default function InquiryForm({ source, heading }: InquiryFormProps) {
  const { data: programs } = useFetch<Program[]>('/api/programs');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (name.trim().length < 3) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[0-9+\-\s()]{7,20}$/.test(phone.trim())) {
      setError('Please enter a valid contact number (e.g. 0300-1234567).');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: name.trim(),
          phone: phone.trim(),
          program_of_interest: program,
          message: message.trim(),
          source,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((body as { error?: string }).error || 'Submission failed.');
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-7 w-7 text-emerald-600" />
        </span>
        <h3 className="font-display text-xl font-bold text-navy-900">Inquiry Received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-navy-600">
          Thank you, {name.split(' ')[0]}. Your inquiry has been recorded. The college admissions
          office will contact you at <span className="font-semibold text-navy-900">{phone}</span>.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setName('');
            setPhone('');
            setProgram('');
            setMessage('');
          }}
          className="mt-2 text-sm font-semibold text-navy-700 underline decoration-gold-400 underline-offset-4 hover:text-navy-900"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const inputCls =
    'w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 outline-none transition focus:border-navy-400 focus:ring-4 focus:ring-navy-100';

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8"
      noValidate={false}
    >
      {heading ? (
        <h3 className="font-display text-xl font-bold text-navy-900">{heading}</h3>
      ) : null}
      <div className="mt-5 grid gap-4">
        <div>
          <label htmlFor={`inq-name-${source}`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Full Name
          </label>
          <input
            id={`inq-name-${source}`}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Muhammad Ahmed"
            className={inputCls}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor={`inq-phone-${source}`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Contact Number
          </label>
          <input
            id={`inq-phone-${source}`}
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0313-0055051"
            className={inputCls}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor={`inq-program-${source}`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Program of Interest
          </label>
          <select
            id={`inq-program-${source}`}
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className={`${inputCls} appearance-none`}
          >
            <option value="">Select a DAE program (optional)</option>
            {(programs ?? []).map((p) => (
              <option key={p.id} value={p.name}>
                DAE — {p.name}
              </option>
            ))}
            <option value="General Inquiry">General Inquiry / Not decided yet</option>
          </select>
        </div>
        <div>
          <label htmlFor={`inq-msg-${source}`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-600">
            Message
          </label>
          <textarea
            id={`inq-msg-${source}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your question about admissions, hostel, programs..."
            rows={4}
            className={`${inputCls} resize-none`}
          />
        </div>
        {error ? (
          <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-navy-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 text-gold-400" />}
          {submitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </div>
    </form>
  );
}
