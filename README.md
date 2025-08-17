# Form Capture App
A full-stack application that captures form submissions from the frontend and stores them in a MySQL database using Sequelize ORM and REST APIs.

## Features
- Simple frontend to capture user data
- RESTful API built with Node.js and Express.js
- Sequelize ORM for database operations
- MySQL as the database
- Validation for inputs

##  Tech Stack
- Frontend: HTML, CSS, JavaScript (React if used)
- Backend: Node.js, Express.js
- Database: MySQL
- ORM: Sequelize


## ⚙ Installation & Setup
1. Clone the repo
   ```bash
   git clone https://github.com/Saikiranrangu01/formCapture.git
   cd backend  
   cd vite-project

## Start Backend
npm run server

## Start Frontend
npm run dev

## Backend packaged installed
npm install express cors multer axios fs

## POSTMAN API'S
GET    "http://localhost:5000/api/v1/leads?page=1&pageSize=10&sort=id&order=desc&fields=username,email
DELETE     "http://localhost:5000/api/v1/leads/5?confirmation=true&force=false"
GET SINGLE LEAD:  "http://localhost:5000/api/v1/leads/5"
ADD   "http://localhost:5000/api/v1/leads"
PATCH "http://localhost:5000/api/v1/leads/1?return=minimal"

