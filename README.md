# WalletWing - E-Commerce Platform

Welcome to WalletWing! [cite_start]This is a feature-rich e-commerce platform designed for a seamless online shopping experience[cite: 3]. [cite_start]It includes user authentication, dynamic product Browse, shopping cart management, and a streamlined checkout process[cite: 3, 227]. [cite_start]The project emphasizes a responsive, user-friendly interface and optimized performance[cite: 4].

## 🚀 Features

This project comes with a wide range of features to provide a complete e-commerce experience:

* [cite_start]**User Authentication**: Secure user login and signup functionality handled by Firebase[cite: 30, 157].
* [cite_start]**Dynamic Product Listings**: Browse products fetched from a mock API, complete with search and filtering capabilities[cite: 32, 224].
* [cite_start]**Responsive Design**: The UI is fully optimized for both desktop and mobile devices, built with Material-UI and Tailwind CSS[cite: 34, 51].
* [cite_start]**Shopping Cart & Wishlist**: Users can easily add, remove, and update the quantity of products in their shopping cart[cite: 36].
* [cite_start]**State Persistence**: Your shopping cart and user session are preserved even after you refresh the page, thanks to `redux-persist`[cite: 42, 181].
* [cite_start]**Interactive UI**: Enjoy features like zoomable product images, product carousels, and instant feedback with toast notifications for user actions[cite: 40, 77].
* [cite_start]**Countdown Timers**: Special sales and promotional offers are highlighted with countdown timers to create a sense of urgency[cite: 39, 79].

## 🛠️ Technologies Used

[cite_start]This project was built using a modern and powerful tech stack to ensure high performance, scalability, and maintainability[cite: 26].

### Frontend
* [cite_start]**React**: Used for building dynamic and reusable UI components[cite: 9].
* [cite_start]**React Router Dom**: Handles all routing to create a seamless single-page application (SPA) experience[cite: 12].
* [cite_start]**Redux Toolkit**: For efficient and predictable global state management, including the shopping cart and user authentication[cite: 14, 45].
* [cite_start]**Redux Persist**: To persist the Redux store in local storage, so user data is not lost on page reloads[cite: 15].

### Styling
* [cite_start]**Material-UI & Tailwind CSS**: A combination used to create a visually appealing and responsive user interface[cite: 13, 76].
* [cite_start]**Emotion**: For component-level styling, providing more flexibility than traditional CSS[cite: 21].
* [cite_start]**PostCSS & Autoprefixer**: Ensures that the CSS is compatible with all modern web browsers[cite: 22].

### Backend & API
* [cite_start]**Firebase**: Powers the user authentication and database services[cite: 16].
* [cite_start]**JSON Server**: Used as a mock REST API for development and testing purposes[cite: 17, 58].
* [cite_start]**Axios**: A promise-based HTTP client for making API calls to the backend[cite: 24].

### Build Tools
* [cite_start]**Vite**: A next-generation frontend build tool that provides fast builds and a superior developer experience with Hot Module Replacement (HMR)[cite: 19, 66].

## 📦 Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/walletwing.git](https://github.com/your-username/walletwing.git)
    cd walletwing
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Firebase Configuration

This project uses Firebase for its backend services. To connect to your own Firebase instance, you will need to set up your environment variables.

1.  **Create a `.env` file** in the root of your project.

2.  [cite_start]**Add your Firebase configuration** to the `.env` file[cite: 110]. You can find these keys in your Firebase project settings.

    ```env
    VITE_APP_API_KEY="your-api-key"
    VITE_APP_AUTH_DOMAIN="your-auth-domain"
    VITE_APP_PROJECT_ID="your-project-id"
    VITE_APP_STORAGE_BUCKET="your-storage-bucket"
    VITE_APP_MESSAGING_SENDER_ID="your-Messaginger-id"
    VITE_APP_APP_ID="your-app-id"
    VITE_APP_MEASUREMENT_ID="your-measurement-id"
    ```

    The application code already uses these environment variables, so you don't need to make any changes to the source code.

    ```javascript
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_APP_API_KEY,
        authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_APP_PROJECT_ID,
        storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_APP_ID,
        measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
    };
    ```

### Available Scripts

In the project directory, you can run the following commands:

* [cite_start]`npm run dev` - Runs the app in development mode with hot reloading[cite: 99].
* [cite_start]`npm run build` - Builds the app for production to the `dist` folder[cite: 283].
* [cite_start]`npm run lint` - Lints the code to find and fix problems[cite: 72].

## 🌟 Future Improvements

While this project is fully functional, there are always opportunities for improvement. Here are a few features I plan to add:

* [cite_start]**Payment Gateway Integration**: Integrate a secure payment gateway like Stripe or Razorpay[cite: 83, 162].
* [cite_start]**Unit & Integration Tests**: Implement a comprehensive test suite using Jest and React Testing Library[cite: 85, 161].
* [cite_start]**Advanced Analytics**: Add analytics tools like Google Analytics to track user behavior[cite: 84].
* [cite_start]**Order Tracking & History**: Allow users to view their order history and track current orders[cite: 163].
