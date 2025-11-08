

export default function TemplateCard({ template, onClick }) {
  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer overflow-hidden transition"
      onClick={onClick}
    >
      <img src={template.thumbnail_url} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{template.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{template.category}</p>
      </div>
    </div>
  );
}
