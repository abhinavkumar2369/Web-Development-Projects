import { useEffect, useState } from 'react';
import { getConfessions } from '../services/api.js';
import ConfessionCard from '../components/ConfessionCard.jsx';

export default function Home() {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getConfessions();
        setConfessions(data);
      } catch (err) {
        setError('Failed to load confessions');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="text-center text-sm text-slate-500">Loading confessions...</p>;
  if (error) return <p className="text-center text-sm text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Latest Confessions</h1>
      {confessions.length === 0 && <p className="text-slate-500">No confessions yet. Be the first!</p>}
      <div className="grid gap-5 md:grid-cols-2">
        {confessions.map(c => <ConfessionCard key={c._id} confession={c} />)}
      </div>
    </div>
  );
}
