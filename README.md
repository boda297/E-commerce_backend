# E-commerce Backend API

This is a robust and scalable e-commerce backend API built with NestJS[cite: 1]. It provides a complete set of endpoints to handle user authentication, product catalogs, shopping carts, order processing, and media uploads, designed with modularity and role-based access control in mind[cite: 1].

## 1. Tech Used
Based on the project configuration, the following technologies and integrations are utilized:
* **Framework:** NestJS
* **Language:** TypeScript
* **Database:** MongoDB (utilizing custom MongoId DTOs for validation)
* **Payment Processing:** Paymob API
* **Media Storage:** Cloudinary
* **Deployment:** Vercel
* **Testing:** Jest (E2E and unit testing)
* **Linting & Formatting:** ESLint and Prettier

## 2. Features
The platform is broken down into several dedicated modules to separate concerns:
* **Authentication & Authorization:** Secure user login and registration with role-based access control (guards and decorators).
* **User Management:** Endpoints to manage user profiles and data
* **Product Catalog:** Product queries and separate admin capabilities for managing the catalog (`product` and `product-admin` modules).
* **Shopping Cart:** Add, update, and manage items in the user's shopping cart.
* **Checkout & Payments:** Secure checkout process integrated with Paymob for handling payment details.
* **Order Management:** Customer order tracking and an `admin-orders` module for administrative oversight.
* **Media Uploads:** Dedicated module for handling image uploads directly to Cloudinary.

## 3. The Process
The backend was developed using NestJS's modular architecture to ensure high maintainability and scalability. 
* **Modularity:** Each feature (Auth, Cart, Checkout, Products, Orders) is encapsulated in its own module with dedicated Controllers, Services, and Entities.
* **Validation:** Data Transfer Objects (DTOs) are used extensively across all modules to validate incoming request payloads before they reach the service layer.
* **Security:** Role-based access control is implemented using custom decorators and guards to differentiate between standard users and administrators.
* **Integrations:** Third-party services like Paymob and Cloudinary are isolated into a `config` directory to keep the business logic clean and maintainable.

## 4. Running the Project

**Prerequisites:**
* Node.js (v16 or higher recommended)
* npm or yarn
* MongoDB instance
* Paymob and Cloudinary account credentials

**Installation & Setup:**
1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and populate it with your environment variables (Database URI, JWT secrets, Cloudinary keys, Paymob credentials)[cite: 1].
4. Start the development server:
   ```bash
   npm run start:dev
   ```
5. To run the test suites:
   ```bash
   npm run test        # For unit tests
   npm run test:e2e    # For end-to-end tests
   ```
```
