import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TemplateCard from "../components/TemplateCard";
import TemplateModal from "../components/TemplateModal";
import { fetchTemplates } from "../services/api";

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [selected, setSelected] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchTemplates().then((res) => setTemplates(res.templates));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Banner */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-blue-100 border-b">
        <h1 className="text-4xl font-extrabold text-blue-700">
          Explore Stunning UI Templates
        </h1>

        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Browse high-quality template designs crafted to give your projects a head start.
        </p>

        {/* Show Create Button Only If Logged In */}
        {token && (
          <div className="mt-6">
            <Link
              to="/create"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              + Create New Template
            </Link>
          </div>
        )}
      </div>

      {/* Templates Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Templates Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.length > 0 ? (
            templates.map((t) => (
              <TemplateCard
                key={t._id}
                template={t}
                onClick={() => setSelected(t._id)}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              Loading templates...
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <TemplateModal
          templateId={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
