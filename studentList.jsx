import axios from "axios";

function StudentList({ students, fetchStudents }) {

  // Delete Student
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  // Mark Present
  const markPresent = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/students/${id}/present`
      );

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  // Mark Absent
  const markAbsent = async (id) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/students/${id}/absent`
      );

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      {students.length === 0 ? (
        <h3>No Students Found</h3>
      ) : (
        students.map((student) => {

          const total =
            student.present + student.absent;

          const percentage =
            total === 0
              ? 0
              : ((student.present / total) * 100).toFixed(2);

          return (
            <div className="student-card" key={student._id}>

              <h2>{student.name}</h2>

              <p>
                <strong>Roll No:</strong> {student.rollNo}
              </p>

              <p>
                <strong>Department:</strong> {student.department}
              </p>

              <p>
                <strong>Present:</strong> {student.present}
              </p>

              <p>
                <strong>Absent:</strong> {student.absent}
              </p>

              <p>
                <strong>Attendance:</strong> {percentage}%
              </p>

              <div className="btn-group">

                <button
                  className="present-btn"
                  onClick={() => markPresent(student._id)}
                >
                  Present
                </button>

                <button
                  className="absent-btn"
                  onClick={() => markAbsent(student._id)}
                >
                  Absent
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>

              </div>

            </div>
          );
        })
      )}

    </div>
  );
}

export default StudentList;