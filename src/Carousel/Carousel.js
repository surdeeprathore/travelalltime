import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const CardSlider = () => {
  const cardsData = [
    { id: 1, name: "Jaipur Tour Package", description: "2 Nights/3 Days", image: "https://www.kabiratours.com/wp-content/uploads/2018/03/one-day-jaipur-sightseeing-tour.jpg" },
    { id: 2, name: "Golden Triangle Tour", description: "11 Nights/12 Days", image: "https://www.indiaprivatedriver.com/storage/uploads/dhl-jpr-agra_1635429381.jpg" },
    { id: 3, name: "Amritsar Tour Package", description: "9 Nights/10 Days", image: "https://dynamic.tourtravelworld.com/package-images/photo-small/dir_15/439900/261219.jpg" },
    { id: 4, name: "Kerala Tour Package", description: "6 Nights/7 Days", image: "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/494899/309078.jpg" },
    { id: 5, name: "Goa Beach Package", description: "3 Nights/4 Days", image: "https://5.imimg.com/data5/SELLER/Default/2022/6/CN/CN/SB/147670257/best-selling-goa-trip-package-for-friends-4-days-3-nights-500x500.png" },
  ];

  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enables automatic sliding
    autoplaySpeed: 2500, // Adjusts the delay (2.5 seconds per slide)
    centerMode: false, // Ensures partial visibility of next and previous slides
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false, // Disables centering for better fit
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container-a">
      <h1 className="tittle-a">Our Popular Pakages </h1>
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div key={card.id} className="card-a">
            <div className="card-image-a">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="card-content-a">
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <button className="view-more-a">View More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
