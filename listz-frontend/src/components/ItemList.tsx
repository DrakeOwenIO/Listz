import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../types/types";


function ItemsList() {
  const [items, setItems] = useState<Item[]>([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/api/items`)
      .then((response) => setItems(response.data))
      .catch((error) => console.error("API error:", error));
  }, [API_URL]);

  return (
    <div>
      <h1>Listz Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
