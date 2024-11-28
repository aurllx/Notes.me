# Notes App

A simple web application for managing notes using Node.js, EJS, MySQL, and Bootstrap.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Description

This project is a basic CRUD (Create, Read, Update, Delete) application for managing notes. It allows users to create, view, edit, and delete notes. The backend is built with Node.js and MySQL for database management, while the frontend is developed using EJS templates and styled with Bootstrap.

## Features

- Create a new note
- View existing notes
- Edit existing notes
- Delete existing notes

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/notes-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd notes-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up MySQL database:
   
   - Create a MySQL database named `notes_db`.
   - Import the provided SQL dump file `notes_db.sql` into your MySQL database.

5. Configure environment variables:
   
   - Rename `.env.example` file to `.env`.
   - Update `.env` file with your MySQL database credentials.

## Usage

1. Start the application:

    ```bash
    npm start
    ```

2. Open your web browser and navigate to `http://localhost:8000` to access the application.

3. You can now perform CRUD operations on notes using the web interface.

## Dependencies

- Node.js
- Express.js
- EJS
- MySQL
- Bootstrap


---

Feel free to customize this README according to your specific project details and requirements.
