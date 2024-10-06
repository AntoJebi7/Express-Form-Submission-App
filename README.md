# Express Form Submission App

This is a basic Express.js application that demonstrates how to handle form submissions using `body-parser`. The app includes middleware to log request details using `morgan` and serves a static HTML file for form input.

## Features

- **Form Handling**: Submits form data (street and pet name) using POST requests.
- **Request Logging**: Logs request details to the console using `morgan` middleware.
- **Static File Serving**: Serves an HTML form located in the `public` folder.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/AntoJebi7/express-form-submission-app.git
    ```
2. Navigate into the project directory:
    ```bash
    cd express-form-submission-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

3. Fill out the form with a street name and pet name, and submit it. The app will log the submitted values and respond with a concatenation of the street and pet name.

## Example Request

- **POST** `/submit`  
  - Body:
    ```json
    {
      "street": "Maple Avenue",
      "pet": "Buddy"
    }
    ```

## Technologies Used

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing incoming request bodies.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for Node.js.

