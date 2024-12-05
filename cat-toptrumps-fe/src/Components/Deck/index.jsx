import { useEffect } from "react";

function Deck({}) {
  
  return (
    <div className="deck">
      {cards.map((cat, index) => (
        <MyCard key={index} name={cat.name} image={cat.image} stats={cat.stats} />
      ))}
    </div>
  );
}

export default Deck;
