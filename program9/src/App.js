import { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:5000/employees";
export default function App() {
  const [list, setList] = useState([]);
  const [emp, setEmp] = useState({ firstName: "", lastName: "", email: "" });
  useEffect(() => {
    load();
  }, []);
  const load = async () => {
    setList((await axios.get(API)).data);
  };
  const save = async () => {
    emp.id
      ? await axios.put(`${API}/${emp.id}`, emp)
      : await axios.post(API, emp);
    setEmp({ firstName: "", lastName: "", email: "", id: list.length + 1 });
    load();
  };
  const del = async (id) => {
    await axios.delete(`${API}/${id}`);
    load();
  };
  const edit = (e) => {
    setEmp(e);
  };
  return (
    <div>
      <input
        placeholder="First Name"
        value={emp.firstName}
        onChange={(e) => setEmp({ ...emp, firstName: e.target.value })}
      />
      <br />
      <input
        placeholder="Last Name"
        value={emp.lastName}
        onChange={(e) => setEmp({ ...emp, lastName: e.target.value })}
      />
      <br />
      <input
        placeholder="Email"
        value={emp.email}
        onChange={(e) => setEmp({ ...emp, email: e.target.value })}
      />
      <br />
      <button onClick={save}>Save</button>

      <table border="1">
        <tbody>
          {list.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>
                <button onClick={() => edit(e)}>Edit</button>
              </td>
              <td>
                <button onClick={() => del(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
