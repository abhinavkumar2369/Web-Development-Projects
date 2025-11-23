# Confession Website Frontend

React + Vite + Tailwind CSS single-page app for anonymous confessions.

## Features
- View list of confessions (newest first)
- Submit new confession (heading & message required; name optional -> defaults Anonymous)
- Responsive, modern UI (Tailwind)

## Getting Started
```bash
cp .env.example .env
npm install
npm run dev
```
Open the URL printed (default: http://localhost:5173).

## Environment Variables
`VITE_API_BASE_URL` – Base URL of backend API (e.g. http://localhost:5000/api)

## Project Structure
```
src/
  components/    # Reusable UI components
  pages/         # Route pages
  services/      # API client (axios)
  utils/         # Helpers (date formatting)
  style.css      # Tailwind entry + custom classes
```

## Scripts
- `dev` – Start Vite dev server
- `build` – Production build
- `preview` – Preview production build

## Future Enhancements
- Pagination / infinite scroll
- Search & filtering
- Like / reactions system
- Server-side validation & rate limiting
- User accounts & auth (optional)
