import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AddConfession from './pages/AddConfession.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddConfession />} />
        </Routes>
      </main>
      <footer className="py-6 text-center text-sm text-slate-500">&copy; {new Date().getFullYear()} Confession Wall</footer>
    </div>
  );
}
