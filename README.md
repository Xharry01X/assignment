# Vite + React Frontend with Node.js Backend and MongoDB

This repository contains a starter template for building a full-stack web application using Vite for the frontend, Node.js for the backend, and MongoDB as the database.

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/)

## Frontend Setup

1. Clone this repository:

   ```bash
   git clone <https://github.com/harshit-1245/assignment>
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the Vite development server. You can view your React app in the browser at `http://localhost:3000`.

## Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:

   - Ensure MongoDB is running on your machine.
   - Update the MongoDB connection string in `backend/config/db.js` if necessary.

4. Start the backend server:

   ```bash
   npm start
   ```

   This will start the Node.js backend server. It will be accessible at `http://localhost:8000`.

## Usage

- You can now begin developing your full-stack application.
- The frontend files are located in the `frontend` directory.
- The backend files are located in the `backend` directory.
- Customize and extend the application to fit your requirements.

## Deployment

- Before deploying your application to production, ensure to configure appropriate environment variables and set up deployment scripts.
- Consider using a hosting platform such as [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/), or [AWS](https://aws.amazon.com/) for deployment.

## License

This project is licensed under the [MIT License](LICENSE).
