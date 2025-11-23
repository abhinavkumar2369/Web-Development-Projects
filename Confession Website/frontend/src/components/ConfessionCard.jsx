import formatDate from '../utils/formatDate.js';

export default function ConfessionCard({ confession }) {
  return (
    <article className="card">
      <h2 className="text-lg font-semibold mb-2 text-slate-800">{confession.heading}</h2>
      <p className="text-slate-700 whitespace-pre-line mb-4">{confession.message}</p>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>By {confession.authorName || 'Anonymous'}</span>
        <time dateTime={confession.createdAt}>{formatDate(confession.createdAt)}</time>
      </div>
    </article>
  );
}
