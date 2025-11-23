import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-500 text-white' : 'text-slate-600 hover:bg-slate-200'}`;

  return (
    <header className="bg-white border-b border-slate-200/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-brand-600">Confession Wall</Link>
        <nav className="flex gap-2">
          <NavLink to="/" className={linkClasses} end>Home</NavLink>
          <NavLink to="/add" className={linkClasses}>Add Confession</NavLink>
        </nav>
      </div>
    </header>
  );
}
