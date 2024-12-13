# E-Commerce App

Welcome to the E-commerce App! This project is a groceries e-commerce app built using Firebase as the backend. 

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository to your local machine.
2. Install the necessary dependencies.
3. Set up the Firebase configuration.

### Firebase Configuration

In order to use Firebase services, you need to set up the Firebase configuration. Open the `firebaseConfig` object in the `README.md` file and replace the values with your own Firebase credentials:

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

Make sure to import the necessary environment variables for the Firebase configuration.
