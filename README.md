# E-Commerce App

The **E-Commerce App** is a full-stack, production-ready web application designed for modern online retail[cite: 2]. It features a robust **NestJS** backend providing a RESTful API and a responsive **React** frontend powered by **Vite** and **Redux Toolkit** for state management[cite: 2]. The platform supports a complete shopping lifecycle, from product discovery to secure checkout and administrative management.

## 2. Features
*   **Customer Experience**: Includes a dynamic product grid, filtering and sorting options, a sliding product showcase, and dedicated gender-based collections (Men/Women).
*   **Shopping Cart & Checkout**: Integrated cart system with secure checkout flows, supported by **Paymob** for payments and **Cloudinary** for image hosting.
*   **Comprehensive Authentication**: Role-based access control (RBAC) featuring secure login, registration, and protected routes for users and admins.
*   **Admin Management Suite**: A dedicated dashboard for managing products, tracking customer orders, and overseeing user accounts.
*   **User Profiles**: Personalized user areas to view order history, manage saved items, and update profile details.

## 3. The Process
The application utilizes a decoupled architecture for maximum scalability:
1.  **Backend Development**: Built with **NestJS** using **TypeScript**, the backend follows a modular structure (`src/auth`, `src/product`, `src/order`) to handle complex business logic and database interactions.
2.  **Frontend Implementation**: Developed with **React** and **JSX**, utilizing **Vite** for optimized builds and **Redux Toolkit** (`src/redux`) to synchronize cart and authentication states across the application.
3.  **API Integration**: Communication is handled through a structured library layer, ensuring consistent data fetching and error handling between the frontend and the NestJS server.
4.  **Deployment Readiness**: Configured for cloud hosting with `vercel.json` and environmental configurations for production services like Cloudinary and Paymob.

## 4. Running the Project

### Backend Setup
1.  Navigate to the backend directory: `cd backend`.
2.  Install dependencies: `npm install`.
3.  Start in development mode: `npm run start:dev`.

### Frontend Setup
1.  Navigate to the frontend directory: `cd frontend`.
2.  Install dependencies: `npm install`.
3.  Start the development server: `npm run dev`.
