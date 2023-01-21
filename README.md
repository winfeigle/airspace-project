# AirSpace Project:

## Description

This project has a React frontend and Rails backend, deployed to Render. It is an AirBnB style app for office spaces.

YouTube Walkthrough: https://www.youtube.com/

![Project Screenshot](/airspace-screenshot.png "AirSpace Project")

### Features

This project includes:

- A Rails API backend with a React frontend.
- Has multiple models on the backend, that include the following:

  - A single one-to-many relationship between a User and their office space listings:

    ```
    User -< Listings
    ```

  - A reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships):

    ```
    User -< Review >- Listing
    ```

  - Full CRUD actions for reviews on listings.
  - Create and Read actions for User, Listing, and Session.

- Multiple client-side routes using React Router, with a nav bar that allows users to navigate between routes.
- Authentication/authorization implementation, including password protection. A user is able to:
  1. sign up with a new user account, and
  2. log in to the site with a secure password and stay logged in via user ID in the session hash, and
  3. log out of the site.

**Important**: a user is only be able to edit and delete resources if they are logged in and the creator of that resource.
