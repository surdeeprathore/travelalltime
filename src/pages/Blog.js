import React, { useState } from 'react';
import "./Blog.css";
import { Link } from 'react-router-dom';
function Blog() {
  const [sections] = useState([
    {
      id: 1,
      title: "Popular Distinations",
      bgColor: "#fffde4",
      posts: [
        {
          id: 1,
          title: "Exploring the Famous Places",
          image: "https://www.irctctourism.com/famous-places-in-india/img/1stsection.jpg",
          description: "A breathtaking journey through the majestic cities.serene landscapes make it a must-visit!",
        },
        {
          id: 2,
          title: "Adventure in the Alps",
          image: "https://images.yourstory.com/cs/210/11718bd02d6d11e9aa979329348d4c3e/OffbeatDestIndia1600x800-1702554599806.jpg",
          description: "The Swiss Alps offer an incredible experience for both adventure seekers and nature lovers alike.",
        },
      ],
    },
    {
      id: 2,
      title: "Gallery",
      bgColor: "#e3f2fd",
      posts: [
        {
          id: 3,
          title: "Sunset in GateWay of india ",
          image: "https://images.pexels.com/photos/12460245/pexels-photo-12460245.jpeg?cs=srgb&dl=pexels-dipinder-rainu-247864103-12460245.jpg&fm=jpg",
          description: "Witness the stunning sunsets of Mumbai,India. The white-washed buildings and blue domes create an unforgettable experience.",
        },
        {
          id: 4,
          title: "Relaxing in the Maldives",
          image: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/11/19152709/shutterstock_1902416098-min-806x537.jpg",
          description: "Crystal-clear waters and white sandy beaches make the Maldives a perfect getaway destination.",
        },
      ],
    },
    {
      id: 3,
      title: "Latest Blog Posts",
      bgColor: "#fff3cd",
      posts: [
        {
          id: 5,
          title: "SkywayTour India Blog",
          image: "https://www.skywaytour.com/media/gallery/2025-02-28-01-55-36-lehladakh.jpg",
          description: "Experience the thrill of the wild with a safari in Kenya. Spot lions, elephants, and more in their natural habitat.",
        },
        {
          id: 6,
          title: "North India Tour Package - North India Holiday - Trip to North India",
          image: "https://vardhmanvacations.com/north-india-tours/img/north-india-tours-packages-1.jpg",
          description: "Explore the dense Amazon rainforest and encounter diverse wildlife and indigenous cultures.",
        },
      ],
    },
    {
      id: 4,
      title: "Customer Testimonials",
      bgColor: "#f5e6e8",
      posts: [
        {
          id: 7,
          title: "Customer Testimonials: AirTreks",
          image: "https://content.airtreks.com/interest-group/wp-content/uploads/sites/2/2022/10/traveling-around-the-world-with-children-header-1650x850-1-1650x850.jpg",
          description: "Discover the ancient history of Rome, from the Colosseum to the Vatican City.",
        },
        {
          id: 8,
          title: "Why Connecting To Locals Will Add More To Your Travels",
          image: "https://www.isango.com/theguidebook/wp-content/uploads/2018/09/Travel-local.4.jpg",
          description: "Experience the rich culture of Japan, from cherry blossoms to traditional tea ceremonies.",
        },
      ],
    },
  ]);

  return (
    <div className="container mt-5">
      <h2 className="tittle-z text-center mb-4">Travel Blog</h2>
      {sections.map((section) => (
        <div key={section.id} className="mb-5 p-4" style={{ backgroundColor: section.bgColor, borderRadius: "10px" }}>
          <h3 className="text-center mb-3">{section.title}</h3>
          <div className="row">
          
            {section.posts.map((post) => (
              <div key={post.id} className="col-md-6 mb-4">
                <Link to='/blogsinside'>
                <div className="card">
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                  </div>
                </div></Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
