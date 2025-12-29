import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardComp from "./CardComp";

export default function Cards() {
  const [apidata, setapidata] = useState([]);

  useEffect(() => {
    handleapi();

    return () => {
      console.log("cache removed");
    };
  }, []);

  const handleapi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setapidata(data);
  };

  return (
    <div className="cards-grid">
      {apidata.map((da) => (
        <CardComp key={da.id} data={da} />
      ))}
    </div>
  );
}
