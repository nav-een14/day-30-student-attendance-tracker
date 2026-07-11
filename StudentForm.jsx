import { useState } from "react";
import axios from "axios";

function StudentForm({ fetchStudents }) {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    department: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !student.name ||
      !student.rollNo ||
      !student.department
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/students",
        student
      );

      alert("Student Added Successfully");

      setStudent({
        name: "",
        rollNo: "",
        department: "",
      });

      fetchStudents();

    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="rollNo"
        placeholder="Roll Number"
        value={student.rollNo}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={student.department}
        onChange={handleChange}
      />

      <button type="submit">
        Add Student
      </button>

    </form>
  );
}

export default StudentForm;