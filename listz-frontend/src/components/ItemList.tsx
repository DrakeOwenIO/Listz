import { useEffect, useState } from "react";
import axios from "axios";

interface Item {
  id: number;
  name: string;
  quantity: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5027/api/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("API error:", error));
  }, []);

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

export default App;