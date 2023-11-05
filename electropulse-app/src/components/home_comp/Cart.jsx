import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCards, setSelectedCards] = useState([])
  // Add autoplay functionality 
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5555/products");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    // breackpoins
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

    // onclick event for the recent views cards
    const handleCardClick = (cardid) => {

      setSelectedCards(prevSelectedCards => [...prevSelectedCards, cardid])
  
      console.log(`Card with id ${cardid} clicked`)
  
    }
  
  return (
    <>
      <div className='container pt-2 pb-5'>
        {/* <h2>Auto Play & Pause without buttons</h2> */}
        <div className='container '>
        <p className='p-3'>Recently Viewed</p>

        <Slider {...settings}>
        {selectedCards.map((selectedCardId) => {
                  const selectedCard = data.find(card => card.id === selectedCardId);
                  return (
                    <div className="col m-3 p-3" key={selectedCardId}>
                      {/* cards */}
                      <div 
                        className="card border border-warning shadow p-3 mb-5 bg-body rounded"
                        style={{ width: '15rem', height: "22rem"}}
                        id='product-card'
                      >
                        <img src={selectedCard.image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <p className="card-text">{selectedCard.brand}</p>
                          <p className="card-title">{selectedCard.name}</p>
                          <p className="card-text">Ksh: {selectedCard.price}</p>
                          
                        </div>
                      </div>
                    </div>
                  );
                })}
        </Slider>
        </div>
        
      </div>

       {/* products rendering  */}

        
       <div className='container'>
        <div className='container  w-100 '>
          {/* <h1 className='bg-warning rounded-top p-2'>Recently Viewed</h1> */}
            <div className='container  p-3 m-auto border border-warning shadow bg-body rounded' >
              <div className="d-flex flex-wrap">              
                {data && data.map((d) => (
                  <div className="col" key={d.id}>
                    {/* cards */}
                    <div 
                    onClick={() => handleCardClick(d.id)}
                    className="card border border-warning shadow p-3 mb-5 bg-body rounded "
                    style={{ width: '16rem', height: "28rem"}}
                    id='product-card'
                    >
                    {/* <img src={backgroundImg} className="card-img-top" alt="..." /> */}
                      <img src={d.image_url} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{d.brand}</p>
                        <p className="card-title">{d.name}</p>
                        
                        {/* <p className="card-text">{d.description}</p> */}
                        <p className="card-text">Ksh: {d.price}</p>

                        <button type="button" 
                          class="btn btn-outline-warning"
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                          </svg>
                          Add to Cart
                          </button>
                      </div>
                      
                    </div>
                  </div>

                ))}
              </div>
            </div>
        </div>
      </div>  
    </>
  );
};

export default Cards;