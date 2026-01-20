import React, { useState } from "react";
function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length < 3) {
      setError("Name must be at least 3 characters long");
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Invalid email address");
    } else if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
      alert("Registration Successful");
      setForm({ name: "", email: "", password: "" });
    }
  };
  return (
    <>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>{error}</p>
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
export default RegistrationForm;
