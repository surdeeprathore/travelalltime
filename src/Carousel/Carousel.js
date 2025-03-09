import React, { useEffect, useState } from 'react';
import { FaHotel, FaUtensils, FaCar } from 'react-icons/fa';
import './Carousel.css';

const cards = [
  { title: 'Jaipur Tour Package', nights: '2 Nights/3 Days', places: 'Jaipur', img: 'https://www.kabiratours.com/wp-content/uploads/2018/03/one-day-jaipur-sightseeing-tour.jpg', },
  { title: 'Golden Triangle Tour', nights: '11 Nights/12 Days', places: 'Delhi » Rishikesh » Agra » Jaipur', img: 'https://www.indiaprivatedriver.com/storage/uploads/dhl-jpr-agra_1635429381.jpg', },
  { title: 'Amritsar Tour Package', nights: '9 Nights/10 Days', places: 'Delhi » Agra » Jaipur » Amritsar', img: 'https://dynamic.tourtravelworld.com/package-images/photo-small/dir_15/439900/261219.jpg', },
  { title: 'Kerala Tour Package', nights: '6 Nights/7 Days', places: 'Cochin »Thekkady » Alleppey', img: 'https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/494899/309078.jpg', },
  { title: 'Goa Beach Package', nights: '3 Nights/4 Days', places: 'Goa', img: 'https://5.imimg.com/data5/SELLER/Default/2022/6/CN/CN/SB/147670257/best-selling-goa-trip-package-for-friends-4-days-3-nights-500x500.png', },
  { title: 'Manali Tour Package', nights: '4 Nights/5 Days', places: 'Manali', img: 'https://manalitourplanner.com/wp-content/uploads/2024/08/Rohtang-Pass_-Where-Snow-Meets-Sky-1024x576.png', },
  { title: 'Ladakh Adventure', nights: '7 Nights/8 Days', places: 'Leh » Nubra Valley » Pangong Lake', img: 'https://travellerchoiceladakh.com/blog/wp-content/uploads/2024/08/Top-Places-to-Visit-in-Leh-Ladakh-in-December.jpg', },
];

function Carousel() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const slider = document.querySelector('.carousel');
    let scrollAmount = 0;

    const slide = () => {
      if (hover) return;
      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;
      
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(slide, 10);
    return () => clearInterval(interval);
  }, [hover]);

  return (
    <div className="main-container " >
      <h2 className="section-title">Popular Tour Packages</h2>
      <div 
        className="carousel-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="carousel">
          {[...cards, ...cards].map((card, i) => (
            <div className="card" key={i}>
              <img src={card.img} alt={card.title} />
              <h4>{card.title}</h4>
              <p>📍 {card.places}</p>
              <div className="icons">
                <FaHotel /> Hotel <FaUtensils /> Food <FaCar /> Car Rental
              </div>
              <div className="footer">
                <span className="nights">{card.nights}</span>
                <button className="view-btn">VIEW TOUR</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
