# E-commerce Backend API

This is a robust and scalable e-commerce backend API built with NestJS[cite: 1]. It provides a complete set of endpoints to handle user authentication, product catalogs, shopping carts, order processing, and media uploads, designed with modularity and role-based access control in mind[cite: 1].

## 1. Tech Used
Based on the project configuration, the following technologies and integrations are utilized[cite: 1]:
* **Framework:** NestJS[cite: 1]
* **Language:** TypeScript[cite: 1]
* **Database:** MongoDB (utilizing custom MongoId DTOs for validation)[cite: 1]
* **Payment Processing:** Paymob API[cite: 1]
* **Media Storage:** Cloudinary[cite: 1]
* **Deployment:** Vercel[cite: 1]
* **Testing:** Jest (E2E and unit testing)[cite: 1]
* **Linting & Formatting:** ESLint and Prettier[cite: 1]

## 2. Features
The platform is broken down into several dedicated modules to separate concerns[cite: 1]:
* **Authentication & Authorization:** Secure user login and registration with role-based access control (guards and decorators)[cite: 1].
* **User Management:** Endpoints to manage user profiles and data[cite: 1].
* **Product Catalog:** Product queries and separate admin capabilities for managing the catalog (`product` and `product-admin` modules)[cite: 1].
* **Shopping Cart:** Add, update, and manage items in the user's shopping cart[cite: 1].
* **Checkout & Payments:** Secure checkout process integrated with Paymob for handling payment details[cite: 1].
* **Order Management:** Customer order tracking and an `admin-orders` module for administrative oversight[cite: 1].
* **Media Uploads:** Dedicated module for handling image uploads directly to Cloudinary[cite: 1].

## 3. The Process
The backend was developed using NestJS's modular architecture to ensure high maintainability and scalability[cite: 1]. 
* **Modularity:** Each feature (Auth, Cart, Checkout, Products, Orders) is encapsulated in its own module with dedicated Controllers, Services, and Entities[cite: 1].
* **Validation:** Data Transfer Objects (DTOs) are used extensively across all modules to validate incoming request payloads before they reach the service layer[cite: 1].
* **Security:** Role-based access control is implemented using custom decorators and guards to differentiate between standard users and administrators[cite: 1].
* **Integrations:** Third-party services like Paymob and Cloudinary are isolated into a `config` directory to keep the business logic clean and maintainable[cite: 1].

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
