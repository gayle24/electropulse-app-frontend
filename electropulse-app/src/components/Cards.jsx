
import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // set state to handle clicked cards
  const [selectedCards, setSelectedCards]  = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://kohls.p.rapidapi.com/categories/list',
        headers: {
          'X-RapidAPI-Key': '7dbd3d40c1msh64e1b5f9d603720p144c39jsn79aa9126d0f2',
          'X-RapidAPI-Host': 'kohls.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(setData(response.data));
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);


  // onclick event for the recent views cards

  const handleCardClick = (CardId) => {

    setSelectedCards(prevSelectedCards => [...prevSelectedCards, CardId]);

    console.log(`Card with ID ${CardId} clicked!`);
    
  }


return (
  <>
    <div className="container">
      <h5 className="text-warning">last viewed</h5>
      {/* Render the selected cards in a separate div */}
      <div className="row row-cols-2 row-cols-lg-4 g-1 g-lg-3">
        {selectedCards.map((selectedCard) => (
          <div className="col" key={selectedCard.ID}>
            <div className="shadow p-2 m-1 my-3 bg-white rounded-3 border border-warning" id="selected-cards">
              {selectedCard.name}
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        {/* handles error message */}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div className="bg-light">
            {data.payload.categories.map((category) => (
              <div key={category.ID} className="container text-center my-5">
                {/* category name */}
                <div className="container bg-warning rounded-top-3 mb-3">
                  <h1>{category.name}</h1>
                </div>

                <div className="row row-cols-2 row-cols-lg-4 g-1 g-lg-3" id="parent-cards">
                  {category.categories.map((nestedCategory) => (
                    <div className="container" key={nestedCategory.ID}>
                      {/* cards */}
                      <div
                        className="col shadow p-2 m-1 my-3 bg-white rounded-3 border border-warning" id="cards"
                        onClick={() => handleCardClick(nestedCategory)}
                      >
                        {nestedCategory.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </>
);
}
export default Cards;


