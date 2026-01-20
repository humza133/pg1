import React from "react";

function Education() {
  const education = [
    { id: 1, name: "sfs", place: "ranchi", level: "10th", grade: "A" },
    { id: 2, name: "sfs", place: "ranchi", level: "12th", grade: "A+" },
  ];

  return (
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Place</th>
        <th>Level</th>
        <th>Grade</th>
      </tr>
      {education.map((edu) => (
        <tr key={edu.id}>
          <td>{edu.name}</td>
          <td>{edu.place}</td>
          <td>{edu.level}</td>
          <td>{edu.grade}</td>
        </tr>
      ))}
    </table>
  );
}
export default Education;
