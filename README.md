# AuthCraft API 🔐

AuthCraft API is a production-ready Node.js authentication and user management backend 
built with Express, MongoDB, and JWT.

## Live Demo
🔗 https://auth-craft-api.vercel.app


## API Demo
A public Postman collection is included to demonstrate:
- User registration
- User login (JWT)
- Get logged-in user profile
- Update profile

Admin APIs are implemented and available on request.

## Features
- User registration & login
- JWT-based authentication
- Role-based access control (Admin/User)
- User profile management
- Admin user management (CRUD)
- Secure password hashing with bcrypt

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## API Endpoints
POST   /api/auth/register  
POST   /api/auth/login  
GET    /api/auth/me  
PUT    /api/auth/me  
GET    /api/users (Admin)  
PUT    /api/users/:id (Admin)  
DELETE /api/users/:id (Admin)

## Setup
1. Clone the repository  
2. Run `npm install`  
3. Create `.env` file  
4. Run `npm run dev`
