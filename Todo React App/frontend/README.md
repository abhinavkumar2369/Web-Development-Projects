# Todo Frontend

React frontend for the Todo application with TailwindCSS styling.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install TailwindCSS:
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

3. Start development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Components

- **App.js** - Main application component
- **Header.js** - Application header with branding
- **TodoForm.js** - Form for creating and editing todos
- **TodoList.js** - Container for todo items
- **TodoItem.js** - Individual todo item with actions
- **FilterBar.js** - Filtering and sorting controls
- **Statistics.js** - Dashboard showing statistics

## Features

- Responsive design with TailwindCSS
- Form validation and error handling
- Real-time filtering and search
- Toast notifications
- Date picker for due dates
- Priority and category management
- Statistics dashboard

## Environment Variables

Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```
