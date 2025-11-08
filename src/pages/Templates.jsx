import { useEffect, useState } from "react";
import { fetchTemplates } from "../services/api";
import TemplateCard from "../components/TemplateCard";
import TemplateModal from "../components/TemplateModal";

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchTemplates().then((res) => setTemplates(res.templates));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <h1 className="text-3xl font-bold text-center text-blue-700">
        Templates Gallery
      </h1>

      <p className="text-gray-600 text-center mt-2">
        Explore UI Templates created by users.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
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
            No templates yet. Create your first one!
          </p>
        )}
      </div>

      {selected && (
        <TemplateModal templateId={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
