

# **Learnify – Online Education Platform**  


## 📌 **Project Description**  

**Learnify** is a fully functional **online education platform** that enables users to create, consume, and rate educational content. Built using the **MERN stack** (**MongoDB, Express.js, React.js, and Node.js**), Learnify aims to:  

- **Enhance learning experiences** by providing engaging and interactive educational content.  
- **Empower instructors** to create and share courses with students worldwide.  

The platform includes **user authentication, course management, payment integration, cloud-based media storage, and a rating system.**  

---

## 🚀 **Technology Used**  

### **Frontend**  
- **HTML, CSS, JavaScript, React.js** – To build an interactive and responsive user interface.  
- **Tailwind CSS** – For styling and design.  
- **Redux** – For state management.  

### **Backend**  
- **Node.js & Express.js** – To handle API requests and server-side logic.  
- **MongoDB & Mongoose** – NoSQL database for flexible and scalable data storage.  
- **JWT (JSON Web Token)** – For authentication and user security.  
- **Bcrypt.js** – For secure password hashing.  
- **Cloudinary** – For cloud-based media storage.  
- **Razorpay** – For payment integration.  

---

## 🏗 **System Architecture**  

The Learnify platform follows a **client-server architecture**:  
1. **Frontend (Client)** – Handles user interactions and communicates with the backend via REST APIs.  
2. **Backend (Server)** – Manages authentication, courses, and payments.  
3. **Database** – Stores user details, course data, transactions, and more.
   ![image](https://github.com/user-attachments/assets/f1d3c333-56fe-4347-8431-f47ac84283c5)


4. **🖼 Architecture Diagram:** 
  ![image](https://github.com/user-attachments/assets/20a879b2-6a5b-4a67-800d-1c79a8994998)


---

## 🎓 **Frontend Features**  

For **Students**:  
- **Homepage** – Overview of the platform and available courses.  
- **Course List** – Displays all courses with details and ratings.  
- **Wishlist** – Save favorite courses for later.  
- **Cart & Checkout** – Purchase courses using Razorpay integration.  
- **Course Content** – Watch videos and access study materials.  
- **Profile Management** – Update user details.  

For **Instructors**:  
- **Dashboard** – View created courses and student feedback.  
- **Course Management** – Create, edit, and delete courses.  
- **Performance Insights** – View metrics such as enrollments and ratings.  

For **Admins (Future Scope)**:  
- **User Management** – Oversee students and instructors.  
- **Platform Analytics** – View revenue and growth statistics.  

---

## 🔧 **Backend Features**  

- **User Authentication** – Sign up, login, OTP verification, and password reset.  
- **Course Management** – Instructors can create, update, and delete courses.  
- **Payment Integration** – Secure transactions using Razorpay.  
- **Media Handling** – Store course content (videos, PDFs) on Cloudinary.  
- **Markdown Support** – For formatted course descriptions.  

---

## 📡 **API Design**  

Learnify follows **RESTful API principles**, using **Node.js and Express.js**.  

### **Sample API Endpoints:**  

- **User Authentication:**  
  - `POST /api/auth/signup` – Register a new user.  
  - `POST /api/auth/login` – Authenticate user and return JWT token.  
  - `POST /api/auth/verify-otp` – Validate OTP.  
  - `POST /api/auth/forgot-password` – Send password reset email.  

- **Course Management:**  
  - `GET /api/courses` – Retrieve all courses.  
  - `GET /api/courses/:id` – Fetch details of a specific course.  
  - `POST /api/courses` – Create a new course (Instructor only).  
  - `PUT /api/courses/:id` – Update a course.  
  - `DELETE /api/courses/:id` – Remove a course.  

- **Payments & Transactions:**  
  - `POST /api/payments/checkout` – Handle course purchases.  

---

## 🛠 **How to Contribute?**  

### **Prerequisites**  
- **Node.js** (vX.X.X)  
- **MongoDB** (vX.X.X)  
- **Git**  

### **Installation Steps**  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/ManasaNagaram/Learnify.git
   cd Learnify
   ```

2. **Install dependencies:**  
   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   - Navigate to the `server/` directory.  
   - Create a `.env` file and add:  
     ```env
     PORT=4000
     MONGODB_URL=your_mongodb_url

     # JWT Secret Key
     JWT_SECRET=your_secret_key

     # Cloudinary
     CLOUD_NAME=your_cloud_name
     API_KEY=your_api_key
     API_SECRET=your_api_secret

     # Razorpay
     RAZORPAY_KEY=your_razorpay_key
     RAZORPAY_SECRET=your_razorpay_secret
     ```

4. **Start the development server:**  
   ```sh
   npm run dev
   ```

---



## 🎯 **Future Enhancements**  

- **Live Classrooms** – Integration of live video classes.  
- **AI-Powered Recommendations** – Personalized course suggestions.  
- **Gamification** – Badges and achievements for student engagement.  

---

