import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import LoadingPlaceholder from './LoadingPlaceholder';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './Cart';


const Cards = () => {
  const [data, setData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [cartItems, setCartItems] = useState([]);

console.log(cartItems);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://electropulse-api.onrender.com/products");
        setData(response.data);
        // console.log(response.data);
        // Simulate a loading delay
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (card) => {
    const existingCartItem = cartItems.find((item) => item.id === card.id);

    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === card.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => {
        const newCartItem = { ...card, quantity: 1 };
        // console.log([...prevCartItems, newCartItem]);
        return [...prevCartItems, newCartItem];
      });
      // console.log(cartItems);
    }


  };

  const handleCardClick = (cardId) => {
    setSelectedCards(prevSelectedCards => [...prevSelectedCards, cardId]);
    console.log(`Card clicked with ID: ${cardId}`);
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
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

  return (
    <>
    <Cart cartItems={cartItems}/>
      <div className='container pt-2 pb-5'>
        <div className='container'>
          <p className='p-3'>Recently Viewed</p>
          <Slider {...settings}>
            {isLoading ? (
              <LoadingPlaceholder />
            ) : (
              selectedCards.map((selectedCardId) => {
                const selectedCard = data.find((card) => card.id === selectedCardId);
                return (
                  <div className="col m-3 p-3" key={selectedCardId}>
                    <div
                      className="card border border-warning shadow p-3 mb-5 bg-body rounded"
                      style={{ width: '15rem', height: '22rem' }}
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
              })
            )}
          </Slider>
        </div>
      </div>

      <div className='container'>
        <div className='container  w-100 '>
          <div className='container  p-3 m-auto border border-warning shadow bg-body rounded'>
            <div className="d-flex flex-wrap">
              {isLoading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <div className="col" key={index}>
                    <LoadingPlaceholder />
                  </div>
                ))
              ) : (
                data.map((d) => (
                  <div className="col" key={d.id}>
                    <div
                      onClick={() => handleCardClick(d.id)}
                      className="card border border-warning shadow p-3 mb-5 bg-body rounded "
                      style={{ width: '16rem', height: '28rem' }}
                      id='product-card'
                    >
                      <img src={d.image_url} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{d.brand}</p>
                        <p className="card-title">{d.name}</p>
                        <p className="card-text">Ksh: {d.price}</p>
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => handleAddToCart(d)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Cards;