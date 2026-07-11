# 🎓 Student Attendance Tracker

A simple MERN Stack application to manage student attendance. Users can add students, mark attendance as Present or Absent, calculate attendance percentage, and delete student records.

---

## 🚀 Features

- ➕ Add Student
- 📋 View All Students
- ✅ Mark Present
- ❌ Mark Absent
- 📊 Calculate Attendance Percentage
- 🗑 Delete Student
- 📱 Responsive User Interface

---

## 🛠 Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```text
student-attendance-tracker

backend
│── models
│   └── Student.js
│── routes
│   └── studentRoutes.js
│── server.js
│── .env
│── package.json

frontend
│── src
│   ├── components
│   │   ├── StudentForm.jsx
│   │   └── StudentList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-attendance-tracker.git
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm install axios
npm run dev
```

---

## 📡 API Endpoints

### Add Student

```http
POST /api/students
```

### Get All Students

```http
GET /api/students
```

### Update Student

```http
PUT /api/students/:id
```

### Mark Present

```http
PATCH /api/students/:id/present
```

### Mark Absent

```http
PATCH /api/students/:id/absent
```

### Delete Student

```http
DELETE /api/students/:id
```

---

## 🗃 Database Schema

```javascript
{
  name: String,
  rollNo: String,
  department: String,
  present: Number,
  absent: Number
}
```

---

## 📸 Screenshots

- Home Page
- Add Student Form
- Student List
- Attendance Dashboard

(Add screenshots after completing the project.)

---

## 🎯 Learning Outcomes

- React Components
- React Hooks (`useState`, `useEffect`)
- Axios API Calls
- Express.js REST APIs
- MongoDB CRUD Operations
- Mongoose Models
- Attendance Percentage Calculation
- Frontend and Backend Integration

---

## 🚀 Future Improvements

- ✏️ Edit Student Details
- 🔍 Search Students
- 📄 Attendance Reports
- 📅 Date-wise Attendance
- 🔐 Admin Login (JWT Authentication)
- 📊 Attendance Charts

---

## 👨‍💻 Author

**Naveena S**

GitHub: https://github.com/your-username

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork it!
