# Todo Backend API

RESTful API for the Todo React App built with Node.js, Express, and MongoDB.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with your MongoDB connection string:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
```

3. Start the server:
```bash
# Development with hot reload
npm run dev

# Production
npm start
```

## API Endpoints

### Get All Todos
- **GET** `/api/todos`
- Query parameters: `category`, `priority`, `completed`
- Returns: Array of todo objects

### Get Single Todo
- **GET** `/api/todos/:id`
- Returns: Todo object

### Create Todo
- **POST** `/api/todos`
- Body: `{ title, description, priority, category, dueDate }`
- Returns: Created todo object

### Update Todo
- **PUT** `/api/todos/:id`
- Body: Updated todo fields
- Returns: Updated todo object

### Toggle Todo Status
- **PATCH** `/api/todos/:id/toggle`
- Returns: Updated todo object

### Delete Todo
- **DELETE** `/api/todos/:id`
- Returns: Success message

### Get Statistics
- **GET** `/api/stats`
- Returns: `{ total, completed, pending, highPriority }`
