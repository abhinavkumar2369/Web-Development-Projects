import { useState } from 'react';
import { createConfession } from '../services/api.js';
import { useNavigate } from 'react-router-dom';

export default function AddConfession() {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!heading.trim() || !message.trim()) {
      setError('Heading and message are required');
      return;
    }
    setSubmitting(true);
    try {
      await createConfession({ heading, message, name });
      navigate('/');
    } catch (err) {
      setError('Failed to submit confession');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add a Confession</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="heading">Heading *</label>
          <input id="heading" className="input" value={heading} onChange={e => setHeading(e.target.value)} placeholder="Short title" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message *</label>
          <textarea id="message" className="textarea" value={message} onChange={e => setMessage(e.target.value)} placeholder="What do you want to confess?" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name (optional)</label>
          <input id="name" className="input" value={name} onChange={e => setName(e.target.value)} placeholder="Leave blank for Anonymous" />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="btn w-full" type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Confession'}</button>
      </form>
    </div>
  );
}
