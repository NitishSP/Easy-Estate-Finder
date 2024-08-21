# Easy Estate Finder - Real Estate Platform for Property Listings and Searches

## Description

**Easy Estate Finder** is a full-stack web application designed to simplify the process of finding and listing real estate properties. Whether you're looking to buy or rent a property, this platform provides an intuitive interface for users to search, create listings, and manage their profiles. It targets users who want to explore properties based on various criteria like location, price, property type, and more.

## Features

- **Property Search**: Filter properties by type (rent or buy), location, price range, property type (condo, house, land, apartment), and number of bedrooms.
- **User Authentication**: Sign up, log in, and log out with ease. Update profile information such as email, username, password, and profile picture.
- **Map Integration**: View property locations on a map using Leaflet.
- **Property Management**: Users can create property listings, upload images, view details, and save listings to their profiles.
- **User Listings**: A dedicated section for users to view all their created property listings.

## Tech Stack

- **Frontend**: React, Sass, React Router DOM, Axios, Leaflet, React Quill
- **Backend**: Node.js, Express, Prisma, MongoDB Atlas
- **Authentication**: Bcrypt, JSON Web Token (JWT), Cookie-Parser
- **Image Handling**: Upload Widget, Cloudinary
- **Others**: CORS

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NitishSP/Easy-Estate-Finder.git
2. **Go to api directory and install dependencies**:
   ```bash
   cd Easy Estate Finder
   cd api
   npm install
3. **Go to client directory and install dependencies**:
   ```bash
   cd Easy Estate Finder
   cd client
   npm install
4. **Create a .env file in the api directory and add the following**:
   ```
   DATABASE_URL=<Your MongoDB Atlas URL>
   JWT_SECRET_KEY=<Your JWT Secret Key>
   CLIENT_URL=<Your Client URL>
   ```
   
6. **Set up Prisma**:
    ```bash
   cd api
   npx prisma db push
    
7. **Run the application**:
   - Start the client
   ```bash
   cd client
   npm run dev

   - Start the API server
   ```bash
   cd api
   node app.js

## Screenshot

## Author
- [Nitish Singh](https://github.com/NitishSP)
- [Linkedin](https://www.linkedin.com/in/nitishsp/)
   

