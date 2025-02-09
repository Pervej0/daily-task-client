# 🚀 Daily Task Management Frontend

This is the frontend for the **Daily Task Management** application, built using **Next.js**, **Redux**, and **React Hook Form** to provide a smooth user experience. It allows users to **add, view, update, delete, and filter tasks**, along with secure authentication and user profile management.

## 🛠️ Technologies Used

- **Next.js** – For server-side rendering and optimized frontend performance
- **Next.js Server Actions** – To handle server-side logic efficiently
- **Redux** – For managing global state
- **React Hook Form** – For form handling and validation
- **Tailwind CSS** – For a modern and responsive UI

## ✨ Features

✅ **User Authentication** (Register, Login, Logout)  
✅ **Task Management** (Create, View, Update, Delete, Filter by Status)  
✅ **User Profile Management** (View & Update Profile)  
✅ **Real-time State Management** (Using Redux for better performance)  
✅ **Smooth & Responsive UI** (With Tailwind CSS)  
✅ **Form Validation** (Using React Hook Form with validation messages)  
✅ **Meaningful User Feedback** (Success & Error messages for better UX)

## 🔥 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Pervej0/daily-task-client
cd daily-task-client
```

## Start Project

```sh
npm install
NEXT_PUBLIC_API_BASE_URL=http://your-backend-api-url.com
npm run dev
```

## 📌 API Endpoints Used

The frontend interacts with the backend API for various features:

### 🔐 Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in user

### ✅ Tasks

- **POST** `/api/tasks` - Create a new task
- **GET** `/api/tasks` - Get all tasks (filter by status)
- **GET** `/api/tasks/:id` - Get a specific task
- **PUT** `/api/tasks/:id` - Update a task
- **DELETE** `/api/tasks/:id` - Delete a task

### 👤 User Profile

- **GET** `/api/user/profile` - Get user profile
- **PUT** `/api/user/profile` - Update user profile

## 💡 Contributing

Contributions are welcome! Feel free to submit a pull request.

## 📝 License

This project is **MIT licensed**.

## 🎯 Follow for Updates

For more projects and updates, follow me on [GitHub](https://github.com/perej0). 🚀
