import { useEffect, useState } from "react";
import axios from "axios";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/students"
      );

      setStudents(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">

      <h1>🎓 Student Attendance Tracker</h1>

      <StudentForm fetchStudents={fetchStudents} />

      <StudentList
        students={students}
        fetchStudents={fetchStudents}
      />

    </div>
  );
}

export default App;