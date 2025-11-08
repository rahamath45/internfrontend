import { useEffect, useState } from "react";

import { FaHeart } from "react-icons/fa";
import { addToFavorites, fetchTemplateById } from "../services/api";

export default function TemplateModal({ templateId, onClose }) {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetchTemplateById(templateId).then((res) => setTemplate(res.template));
  }, [templateId]);

  if (!template) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <button className="absolute top-3 right-4 text-xl" onClick={onClose}>✕</button>

        <img src={template.thumbnail_url} className="rounded mb-4" />
        <h2 className="text-xl font-bold">{template.name}</h2>
        <p className="text-gray-600 mt-2">{template.description}</p>

        <button
          className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => addToFavorites(template._id)}
        >
          <FaHeart /> Add to Favorites
        </button>
      </div>
    </div>
  );
}
