import { useEffect, useState } from "react";

import TemplateCard from "../components/TemplateCard";
import TemplateModal from "../components/TemplateModal";
import { fetchTemplates } from "../services/api";

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchTemplates().then((res) => setTemplates(res.templates));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {templates.map((t) => (
        <TemplateCard key={t._id} template={t} onClick={() => setSelected(t._id)} />
      ))}

      {selected && (
        <TemplateModal
          templateId={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
