import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("Registered! Now login.");
  };

  return (
    <div className="max-w-md mx-auto p-10">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" className="border p-2 w-full" onChange={handleChange} />
        <input name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-full" onChange={handleChange} />
        <button className="bg-blue-600 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
}
