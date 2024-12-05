import MyCard from "./Components/Card/index";

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  // const [cards, setCards] = useState([]);
  const [cards] = useState([
    {
      id: 1,
      name: "Ragdoll",
      image: "https:example.com/siamese.jpg",
      stats: {
        friendliness: 8,
        intelligence: 7,
        playfulness: 6,
      },
    },
    {
      id: 2,
      name: "Siamese",
      image: "https:example.com/siamese.jpg",
      stats: {
        friendliness: 9,
        intelligence: 8,
        playfulness: 7,
      },
    },
    {
      id: 3,
      name: "Siamese",
      image: "https:example.com/siamese.jpg",
      stats: {
        friendliness: 9,
        intelligence: 8,
        playfulness: 7,
      },
    },
  ]);

  // function getDeck(){
  //   useEffect(() => {
  //     async function fetchCards() {
  //       const response = await fetch("YOUR_BACKEND_URL/api/cats");
  //       const data = await response.json();
  //       setCards(data); // Assume data is an array of cat breeds
  //     }
  //     fetchCards();
  //   }, []);
  // }

 

  let shuffledCards = cards.sort(() => Math.random() - .5)

 

dealCards(shuffledCards)


  function dealCards(shuffledCards) { //make sure to change type
    {
      const card = shuffledCards.pop()

      console.log(card)
      return(
        <MyCard
          name={card.name}
          image={card.image}
          stats={card.stats}
        />

      )
      ;
    }
  }
  

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row bg-dark text-light">
            <div className="col-12 col-sm-6">
              <h1 className="text-sm-left text-center">
                <Link to={"/"} className="text-light">
                  Cat Top-trumps
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="table">
            {cards.map((card, index) => (
              <MyCard
                key={index}
                name={card.name}
                image={card.image}
                stats={card.stats}
              />
            ))}
          </div>
        </div>

        <div className="container">
          <footer className="border-top mt-5 py-3">
            <p>&copy; Finley Champion 2024</p>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
