import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/Home");
  };

  return (
    <div className="max-w-md mx-auto p-10">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-full" onChange={handleChange} />
        <button className="bg-green-600 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
}


