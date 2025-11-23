# Confession Website Backend

Express + MongoDB API for anonymous confessions.

## Features
- Create confession (heading, message, optional name -> defaults Anonymous)
- List confessions (newest first)

## Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/confessions | List all confessions |
| POST | /api/confessions | Create a confession |

### POST /api/confessions Body
```json
{
  "heading": "My confession heading",
  "message": "Details of the confession...",
  "name": "(Optional) Your name or leave blank"
}
```

Response contains created object including `createdAt`.

## Setup
```bash
cp .env.example .env
npm install
npm run dev
```

Ensure MongoDB is running locally or set `MONGO_URI` to a remote cluster.

## Environment Variables
See `.env.example`.

## Production Notes
- Set strict CORS origin
- Consider adding rate limiting & validation hardening
