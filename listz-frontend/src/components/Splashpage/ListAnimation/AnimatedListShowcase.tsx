import { useEffect, useState } from "react";
import "./AnimatedListShowcase.css";

const groceryList = [
  { name: "Laptop", quantity: "453" },
  { name: "Desktop", quantity: "354" },
  { name: "Monitor", quantity: "386" },
  { name: "Wireless Mouse", quantity: "132" },
  { name: "USB-C Charger", quantity: "764" },
  { name: "1TB SSD", quantity: "87" },
  { name: "1TB HHD", quantity: "56" },
  { name: "Wireless Keyboard", quantity: "124" },
  { name: "HDMI", quantity: "835" },
  { name: "Speaker", quantity: "47" },
];

const inventoryList = [
  { name: "Steel Beam", quantity: "20" },
  { name: "Welding Rods", quantity: "100" },
  { name: "Bolts", quantity: "500" },
  { name: "Screws", quantity: "500" },
  { name: "Screws", quantity: "500" },
  { name: "Screws", quantity: "500" },
  { name: "Screws", quantity: "500" },
  { name: "Screws", quantity: "500" },
  { name: "Screws", quantity: "500" },
  { name: "Screws", quantity: "500" },
];

const AnimatedListShowcase = () => {
  const [currentList, setCurrentList] = useState<"grocery" | "inventory">("grocery");
  const [animationClass, setAnimationClass] = useState("slide-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("slide-out");

      setTimeout(() => {
        setCurrentList(prev => (prev === "grocery" ? "inventory" : "grocery"));
        setAnimationClass("slide-in");
      }, 500); // match the animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const listData = currentList === "grocery" ? groceryList : inventoryList;

  return (
    <div className="animated-list-wrapper">
      <div className={`animated-list-table ${animationClass}`}>
        <div className="list-row list-header">
          <div className="list-cell">Item</div>
          <div className="list-cell">Quantity</div>
        </div>
        {listData.map((item, index) => (
          <div className="list-row" key={index}>
            <div className="list-cell">{item.name}</div>
            <div className="list-cell">{item.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedListShowcase;
