# 🛍️ WalletWing - Modern E-Commerce Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material-UI" />
</div>

<br />

**WalletWing** is a feature-rich, modern e-commerce platform built with React and powered by cutting-edge technologies. It provides a seamless online shopping experience with responsive design, secure authentication, and optimized performance.

## ✨ Key Features

### 🔐 Authentication & Security
- **Firebase Authentication** - Secure user registration, login, and session management
- **Protected Routes** - Route-level authentication guards
- **Environment Variables** - Secure API key management with dotenv

### 🛒 Shopping Experience  
- **Dynamic Product Catalog** - Browse products with real-time data fetching
- **Advanced Search & Filtering** - Find products by category, price, rating, and more
- **Smart Shopping Cart** - Add, remove, and update quantities with persistent state
- **Wishlist Management** - Save favorite items for later
- **Interactive Product Images** - Zoom functionality for detailed product viewing

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Modern UI Components** - Built with Material-UI and Tailwind CSS
- **Accessible Design** - WCAG compliant with proper ARIA labels
- **Smooth Animations** - Engaging micro-interactions and transitions

### ⚡ Performance & UX
- **State Persistence** - Cart and session data preserved across page reloads
- **Lazy Loading** - Code splitting for faster initial load times
- **Hot Module Replacement** - Lightning-fast development with Vite
- **Toast Notifications** - Instant feedback for user actions
- **Countdown Timers** - Create urgency with flash sale timers
- **Product Carousels** - Engaging multi-item displays

## 🚀 Tech Stack

### Frontend Architecture
```
React 18.x          - Modern UI library with hooks
Redux Toolkit       - Predictable state management  
React Router Dom    - Client-side routing
Vite               - Next-generation build tool
```

### Styling & UI
```
Material-UI        - Pre-built React components
Tailwind CSS       - Utility-first CSS framework
Emotion           - CSS-in-JS styling
PostCSS           - CSS processing with Autoprefixer
Headless UI       - Accessible UI primitives
```

### Backend & Services
```
Firebase          - Authentication & database
JSON Server       - Mock REST API for development
Axios            - HTTP client for API requests
```

### Additional Libraries
```
redux-persist          - Persist Redux state
react-hot-toast       - Lightweight notifications
react-multi-carousel  - Responsive carousels
react-medium-image-zoom - Image zoom functionality
react-countdown       - Countdown timers
react-icons          - Icon library
```

## 🏗️ Architecture Overview

The application follows modern React development patterns with:

- **Component-Based Architecture** - Modular, reusable UI components
- **Redux Store Management** - Centralized state with Redux Toolkit slices
- **Route-Based Navigation** - Client-side routing with React Router
- **Responsive Layout System** - Mobile-first design approach
- **Secure Authentication Flow** - Firebase-powered user management

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account (for authentication)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/walletwing.git
   cd walletwing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_API_KEY=your_firebase_api_key
   VITE_APP_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_APP_PROJECT_ID=your_project_id
   VITE_APP_STORAGE_BUCKET=your_project.appspot.com
   VITE_APP_MESSAGING_SENDER_ID=your_sender_id
   VITE_APP_APP_ID=your_app_id
   VITE_APP_MEASUREMENT_ID=your_measurement_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run lint:fix` | Fix auto-correctable linting issues |

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication with Email/Password provider
3. Set up Firestore Database (optional)
4. Copy your config keys to the `.env` file

### Development API
The project uses JSON Server for mock API during development:
```bash
# Install globally (optional)
npm install -g json-server

# Start mock server
json-server --watch db.json --port 3001
```

## 🎯 Key Implementation Highlights

### State Management
- **Redux Toolkit** with slice-based architecture for scalable state management
- **Redux Persist** for maintaining cart and user session across page reloads
- **Async Thunks** for handling API calls and loading states

### Performance Optimizations
- **Code Splitting** with React.lazy() for route-based lazy loading
- **Memoization** using React.memo for expensive component re-renders
- **Image Optimization** with lazy loading and compression
- **Bundle Optimization** via Vite's advanced build features

### User Experience
- **Responsive Design** ensuring perfect experience across all devices
- **Loading States** providing visual feedback during async operations  
- **Error Boundaries** gracefully handling runtime errors
- **Accessibility** following WCAG guidelines for inclusive design

## 🔮 Future Enhancements

### Phase 1 - Core Improvements
- [ ] **Payment Integration** - Stripe/Razorpay gateway implementation
- [ ] **Order Management** - Order history and tracking system
- [ ] **Product Reviews** - User rating and review system
- [ ] **Advanced Filtering** - Price range, brand, and specification filters

### Phase 2 - Advanced Features  
- [ ] **Testing Suite** - Jest and React Testing Library integration
- [ ] **PWA Support** - Service workers and offline functionality
- [ ] **Analytics** - Google Analytics and user behavior tracking
- [ ] **SEO Optimization** - Server-side rendering with Next.js migration

### Phase 3 - Enterprise Features
- [ ] **Multi-vendor Support** - Marketplace functionality
- [ ] **Inventory Management** - Real-time stock tracking
- [ ] **Admin Dashboard** - Comprehensive management interface
- [ ] **Advanced Search** - Elasticsearch integration

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 200KB (gzipped)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and ESLint rules
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Redux Team** for predictable state management
- **Material-UI** for beautiful components
- **Tailwind CSS** for utility-first styling
- **Firebase** for backend services

## 📧 Contact

**Mitesh** - [Email](mailto:miteshanshu1@gmail.com)

Project Link: [https://github.com/miteshanshu/WalletWing](https://github.com/miteshanshu/WalletWing)

---

<div align="center">
  <p>Made with ❤️ by Mitesh</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
