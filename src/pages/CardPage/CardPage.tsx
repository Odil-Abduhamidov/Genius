import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CardPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<any | null>(null);

  useEffect(() => {
    fetch(`http://161.35.153.209:5430/data/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Ошибка загрузки карточки", error));
  }, [id]);

  if (!item) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      {/* Дополнительные данные */}
    </div>
  );
};

