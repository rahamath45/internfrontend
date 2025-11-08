import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createTemplate } from "../services/api";
import { toast } from "react-toastify";

export default function CreateTemplate() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
    }
  }, [token, navigate]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    thumbnail_url: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createTemplate(form);
      toast.success("Template created successfully ✅");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create template ❌");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Create New Template
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Template Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />

          <input
            type="text"
            name="thumbnail_url"
            placeholder="Thumbnail Image URL"
            value={form.thumbnail_url}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category (ex: Portfolio, E-commerce)"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Create Template
          </button>
        </form>
      </div>
    </div>
  );
}
