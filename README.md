# Vaultify
Vaultify is a secure password manager backend that uses Node.js, Express, MongoDB, bcrypt, and JWT to provide authentication and encrypted credential storage.




A secure backend for a Password Manager built using the MERN stack.

## Features

- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- MongoDB Atlas integration
- Protected routes with authentication middleware
- Database seed script for development

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- dotenv

## Project Structure

```
vaultify/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── init/
├── app.js
└── .env
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login user |
| GET | `/api/users/profile` | Protected route |

## Development

Seed the database with sample users:

```bash
npm run init
```

Run the server:

```bash
npm run dev
```