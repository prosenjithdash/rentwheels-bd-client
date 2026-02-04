# RentWheels_BD – Client Side

RentWheels_BD is a web-based vehicle rental application where users can search, book, and manage vehicle rentals online. The platform is designed with a clear role-based system so that renters, hosts, and admins can use the application according to their responsibilities.

This repository contains the frontend part of the project, focused on usability, clean design, and smooth interaction with the backend APIs.

Live Website: 


---

## Technologies Used

- React
- React Router DOM
- Tailwind CSS
- DaisyUI (customized components)
- Firebase Authentication
- Axios
- TanStack Query (React Query)
- Stripe
- Recharts

---

## Project Overview

The goal of this project is to build a complete vehicle rental solution that covers the full booking flow—from browsing vehicles to making payments and managing bookings. The application is designed to handle real-world use cases such as role-based access, secure authentication, and data-driven dashboards.

Special attention was given to keeping the interface simple, responsive, and easy to use across all devices.

---

## Authentication & User Access

- Users can register using email and password
- Google sign-in option is available
- Authentication is handled securely using JWT stored in HTTP-only cookies
- User login state remains active even after page reload
- Private routes are protected based on user roles

---

## User Roles & Features

### Renter (Default Role)
- Browse available vehicles
- Filter vehicles by category
- View detailed vehicle information
- Book vehicles using secure online payment
- View booking history
- Access a personal dashboard with booking statistics
- Request upgrade to host role

---

### Host
- All renter features
- Add new vehicles for rental
- Manage and update listed vehicles
- Control vehicle availability
- View bookings made on their vehicles
- Host dashboard with earnings and booking insights

---

### Admin
- View overall platform statistics
- Monitor total users, vehicles, and bookings
- Manage user roles and approvals
- Track total sales and system activity

---

## Dashboard Pages

- Statistics Dashboard (role-based)
- Booking Management Page
- My Listings Page (host only)
- User Management Page (admin only)
- Profile Page with update options

Charts and analytics are displayed using **Recharts** to provide a clear overview of activity and performance.

---

## Payment System

- Secure online payments are handled using Stripe
- Payment intent is generated from the server
- Booking is completed only after successful payment
- Transaction details are shown in user dashboards

---

## Email Notifications

- Welcome email on new user registration
- Booking confirmation email for renters
- Booking notification email for hosts

---

## Environment Variables

Create a `.env` file in the root directory of the client project and add:

```env
VITE_API_URL=your_server_api_url
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
