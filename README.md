## 📦 Fullstack Intern Task

A full-stack web application built with React (Vite) for the frontend and Node.js, Express.js, and MongoDB for the backend.
Users can create and browse templates, and the system supports authentication and protected API access.

### 🚀 Features
🔐 Authentication

User Registration & Login using JWT

Protected routes accessible only after login

Token stored in Local Storage

🖼️ Templates

Create a new template with:

Name

Description

Thumbnail Image URL

Category

View all templates

Stored securely in MongoDB

🛠️ Tech Stack

Frontend

React (Vite)

TailwindCSS

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

CORS

⚙️ Setup Instructions
Step 1: Clone the Repository
git clone https://github.com/your-username/fullstack-intern-task.git
cd fullstack-intern-task

Step 2: Install Dependencies

Frontend:

cd client
npm install


Backend:

cd ../server
npm install

Step 3: Add Environment Variables

Create a .env file inside server/ with:

MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_secret_key
PORT = 5000

Step 4: Run the Backend
cd server
npm start

Step 5: Run the Frontend
cd client
npm run dev

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/templates	Get all templates
POST	/api/templates	Create new template (Auth required)
📌 Folder Structure
fullstack-intern-task/
│
├── client/        → React Frontend (Vite)
│
└── server/        → Node.js + Express Backend

👨‍💻 Developer Info

Name: Rahamathu nissa
email:rahamathsulaiman45@gmail.com
phone:9894892240
