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

# Image Gallery CRUD Application

## Overview

This project is an Image Gallery application that allows users to perform CRUD (Create, Read, Update, Delete) operations on images. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and includes features for fetching and caching images. The primary focus of this project is to demonstrate CRUD operations and caching mechanisms.

## Features

- **Create**: Upload and add new images to the gallery.
- **Read**: View and browse images in the gallery.
- **Update**: Edit image details such as title and description.
- **Delete**: Remove images from the gallery.
- **Caching**: Improve performance by caching images.

## Technologies and Libraries Used

### Backend

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing image data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for routing in React applications.
- **Zustand**: State management library.(not implemented but soon I'll implement)
- **React Query**: Data-fetching library for React (used previously).
- **CSS**: Styling for the application.

## API Documentation

### Endpoints

#### Get All Images
- **Endpoint**: `/api/img`
- **Method**: GET
- **Description**: Retrieve all images from the database.
- **Response**:
  ```json
  [
    {
      "_id": "string",
      "url": "string",
      "name": "string",
      "description": "string",
      "caption": "string"
    }
  ]

