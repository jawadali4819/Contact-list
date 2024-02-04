# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Contact List App

A simple contact list app built using React and Firebase.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Description

The Contact List App is a web application that allows users to manage their contacts by adding names and email addresses to a Firebase Firestore database. The app is built using React for the frontend and Firebase for backend storage.

## Features

- Add a new contact with a name and email address.
- View the list of contacts.
- Contacts are stored in Firebase Firestore.
- Simple and user-friendly interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-list-app.git

2. Navigate to the project directory:
   ```bash
   cd contact contact-list

3. Install dependencies:
    ```bash
    npm install

4. Set up Firebase:
    Create a new Firebase project on the Firebase Console.
    Obtain your Firebase configuration (API key, authDomain, projectId, etc.).
    Replace the placeholder values in src/config/firebase.js with your Firebase configuration.

5. Start the development server:
   ```bash
   npm run dev


## Usage
    Open the app in your browser.
    Add new contacts using the "Add Contact" button.
    View the list of contacts on the main page.
    Contacts are stored in Firebase Firestore.

## Technologies Used
    React
    Firebase (Firestore)
    HTML
    CSS
    JavaScript

