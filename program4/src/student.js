import React, { useState, useEffect } from "react";
const intitialStudentData = [
  { slno: 1, name: "Hardik", usn: "rvce1", marks: 85 },
  { slno: 2, name: "abc", usn: "rvce2", marks: 90 },
];
function StudentListTable() {
  const [student, setStudent] = useState(intitialStudentData);
  useEffect(() => {
    setTimeout(() => {
      setStudent(intitialStudentData);
    }, 2000);
  }, []);

  const addStudent = (e) => {
    e.preventDefault();
    const form = e.target;
    const newStudent = {
      slno: student.length + 1,
      name: form.name.value,
      usn: form.usn.value,
      marks: form.marks.value,
    };
    setStudent([...student, newStudent]);
    form.reset();
  };
  return (
    <>
      <table border="1">
        <tr>
          <th>Sl No</th>
          <th>Name</th>
          <th>USN</th>
          <th>Marks</th>
        </tr>
        {student.map((stu) => (
          <tr key={stu.slno}>
            <td>{stu.slno}</td>
            <td>{stu.name}</td>
            <td>{stu.usn}</td>
            <td>{stu.marks}</td>
          </tr>
        ))}
      </table>

      <form onSubmit={addStudent}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="usn" placeholder="USN" required />
        <input type="number" name="marks" placeholder="Marks" required />
        <button type="submit">Add Student</button>
      </form>
    </>
  );
}
export default StudentListTable;
