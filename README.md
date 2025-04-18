# Task Manager REST API

A simple REST API built with Node.js and Express.js to manage tasks. This project supports creating, reading, updating, and deleting tasks stored in memory, designed as a quick exercise to refresh Node.js skills.

## Features

* **Endpoints**:
   * `GET /tasks`: List all tasks.
   * `GET /tasks/:id`: Retrieve a task by ID.
   * `POST /tasks`: Create a new task (requires title; description and status optional).
   * `PUT /tasks/:id`: Update a task's title, description, or status.
   * `DELETE /tasks/:id`: Delete a task.
* In-memory task storage (no database).
* Basic input validation (e.g., title required).
* Standard HTTP status codes (200, 201, 404, 400).

## Tech Stack

* **Node.js**: JavaScript runtime.
* **Express.js**: Web framework for routing and middleware.
* **Postman/cURL**: For testing API endpoints.

## Prerequisites

* Node.js (v16 or higher) installed. Verify with `node -v`.
* npm (comes with Node.js). Verify with `npm -v`.
* Postman or cURL for testing (optional).

## Setup Instructions

1. **Clone or Create Project**:
   * Create a project folder: `mkdir task-api && cd task-api`.
   * Initialize npm: `npm init -y`.
2. **Install Dependencies**:
   ```bash
   npm install express
   ```
3. **Create `index.js`**:
   * Copy the provided code (from prior conversation) or create a file with the Express server and API endpoints.
4. **Run the Server**:
   ```bash
   node index.js
   ```
   * The server runs on `http://localhost:3000`.

## Usage

* **Test Endpoints** using Postman or cURL:
   * **Create a Task**:
     ```bash
     curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Buy groceries","description":"Milk, eggs"}'
     ```
     Response: `{"id":1,"title":"Buy groceries","description":"Milk, eggs","status":"pending"}`
   * **List All Tasks**:
     ```bash
     curl http://localhost:3000/tasks
     ```
     Response: `[{"id":1,"title":"Buy groceries","description":"Milk, eggs","status":"pending"}]`
   * **Get a Task**:
     ```bash
     curl http://localhost:3000/tasks/1
     ```
     Response: `{"id":1,"title":"Buy groceries","description":"Milk, eggs","status":"pending"}`
   * **Update a Task**:
     ```bash
     curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"status":"completed"}'
     ```
     Response: `{"id":1,"title":"Buy groceries","description":"Milk, eggs","status":"completed"}`
   * **Delete a Task**:
     ```bash
     curl -X DELETE http://localhost:3000/tasks/1
     ```
     Response: (204 No Content)
   * **Error Handling**:
      * Missing title: `{"message":"Title is required"}` (400).
      * Task not found: `{"message":"Task not found"}` (404).
* **Stop the Server**: Press `Ctrl+C` in the terminal.

## Project Structure

```
task-api/
├── index.js          # Main Express server and API logic
├── package.json      # Project metadata and dependencies
└── node_modules/     # Installed dependencies
```

## Notes

* Tasks are stored in memory and reset on server restart. For persistence, consider adding a database (e.g., MongoDB).
* Extend the project by adding middleware for request logging or file-based storage.
* This project is a foundation for larger applications, like a real-time analytics dashboard backend.

## Troubleshooting

* **Port Conflict**: If port 3000 is in use, change `PORT` in `index.js` (e.g., `const PORT = 3001`).
* **Dependency Issues**: Run `npm install` again or delete `node_modules` and `package-lock.json`, then reinstall.
* **API Errors**: Ensure JSON payloads are valid and Content-Type is `application/json`.

## License

MIT License. Feel free to use and modify this code for learning purposes.
