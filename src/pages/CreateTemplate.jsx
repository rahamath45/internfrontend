import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { createTemplate } from "../services/api";

export default function CreateTemplate() {
  const navigate = useNavigate();
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
    
    const res = await createTemplate(form);

    console.log(res.message); // optional success log
    navigate("/"); // go back to templates page
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Template</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Template Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="thumbnail_url"
          placeholder="Thumbnail Image URL"
          value={form.thumbnail_url}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Create Template
        </button>

      </form>
    </div>
  );
}
