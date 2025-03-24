import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css"; // Import custom styles

const Gallery = () => {
  const cards = [
    { id: 1, text: "Jaipur Tour Package", description: "Jaipur, the capital of Rajasthan, is a mesmerizing blend of royal heritage, vibrant culture, and architectural marvels. Known as the Pink City, Jaipur boasts magnificent forts, bustling bazaars, and mouth-watering cuisine.", image: "https://www.kabiratours.com/wp-content/uploads/2018/03/one-day-jaipur-sightseeing-tour.jpg" },
    { id: 2, text: "Golden Triangle Tour", description: "Embark on a journey through India’s Golden Triangle, covering Delhi, Agra, and Jaipur—a perfect blend of history, culture, and architectural splendor.", image: "https://www.indiaprivatedriver.com/storage/uploads/dhl-jpr-agra_1635429381.jpg" },
    { id: 3, text: "Amritsar Tour", description: "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest shrine of Sikhism and a symbol of peace, devotion, and spiritual harmony. Located in Amritsar, Punjab, this breathtaking temple is not just an architectural wonder but also a place of deep faith and selfless service.", image: "https://dynamic.tourtravelworld.com/package-images/photo-small/dir_15/439900/261219.jpg" },
    { id: 4, text: "Kerala Tour", description: "Welcome to Kerala, famously known as “God’s Own Country”! Nestled between the Arabian Sea and the Western Ghats, Kerala is a land of breathtaking landscapes, lush greenery, tranquil backwaters, misty hill stations, and exotic wildlife.", image: "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/494899/309078.jpg" },
    { id: 5, text: "Goa Beach Package", description: "Imagine soft golden sands, swaying palm trees, and the soothing sound of waves—India’s breathtaking beaches offer the perfect escape for relaxation and adventure alike! Whether you seek peaceful solitude, thrilling water sports, or vibrant beach parties, there's a beach destination just for you.", image: "https://5.imimg.com/data5/SELLER/Default/2022/6/CN/CN/SB/147670257/best-selling-goa-trip-package-for-friends-4-days-3-nights-500x500.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h1 className="tittle-a">Popular Destination</h1>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="carousel-card">
            <div className="carousel-image">
              <img src={card.image} alt={card.text} />
              <div className="carousel-overlay">
                <h3>{card.text}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
