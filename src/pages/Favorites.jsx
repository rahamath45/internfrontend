import { useEffect, useState } from "react";

import TemplateCard from "../components/TemplateCard";
import { fetchFavorites } from "../services/api";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites().then((res) => setFavorites(res.favorites));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favorites.map((t) => (
        <TemplateCard key={t._id} template={t} onClick={() => {}} />
      ))}
    </div>
  );
}
