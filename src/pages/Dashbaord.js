import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Kashmir', description: 'Beautiful valley with lakes and mountains' },
    { id: 2, name: 'Goa', description: 'Famous for beaches and nightlife' }
  ]);
  const [gallery, setGallery] = useState([
    { id: 1, image: 'https://mytriphack.com/wp-content/uploads/2016/03/bijapur_itinerary-cover.jpg' },
    { id: 2, image: 'https://c.myholidays.com/blog/blog/content/images/2020/11/Places-To-Visit-In-India.webp' }
  ]);
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, user: 'John Doe', comment: 'Great experience!' },
    { id: 2, user: 'Jane Doe', comment: 'Loved the service!' }
  ]);
  const [blogPosts, setBlogPosts] = useState([
    { id: 1, title: 'Best Places to Visit in 2025', content: 'Discover the top travel destinations for this year.' },
    { id: 2, title: 'How to Plan a Perfect Trip', content: 'Step-by-step guide to planning your vacation.' }
  ]);
  const [testimonials, setTestimonials] = useState([
    { id: 1, user: 'Alice', comment: 'Fantastic tour experience, highly recommended!' },
    { id: 2, user: 'Bob', comment: 'Loved every moment of my journey!' }
  ]);

  return (
    <div className="dashboard-container2">
      <h2>Admin Dashboard</h2>
      
      <section>
        <h3>Popular Destinations</h3>
        <Link to='/PostDestination'>
        <button className="add-btn2">Add Destination</button></Link>
        <ul>
          {destinations.map(dest => (
            <li key={dest.id}  className='dashboard_list'>
              {dest.name} - {dest.description}
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3>Gallery</h3>
        <Link to='/PostDestination'>
        <button className="add-btn2">Add Image</button></Link>
        <ul>
          {gallery.map(img => (
            <li key={img.id} className='dashboard_list'>
              <img src={img.image} alt="Gallery Item" width="100" />
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3>Feedbacks</h3>
        <Link to='/PostDestination'>
        <button className="add-btn2">Add feedback</button></Link>
        <ul>
          {feedbacks.map(feed => (
            <li key={feed.id} className='dashboard_list'>
              {feed.user}: {feed.comment}
              <div>
              <button className="edit-btn2">Edit</button>
              <button className="delete-btn2">Delete</button>
              </div>
          
            </li>
          ))}
        </ul>
        <Link to="/feedback">View All Feedback</Link>
      </section>
      
      <section>
        <h3>Latest Blog Posts</h3>
        <Link to='/PostDestination'>
        <button className="add-btn2">Add Blog Post</button></Link>
        <ul>
          {blogPosts.map(post => (
            <li key={post.id} className='dashboard_list'>
              <strong>{post.title}</strong> - {post.content}
              <div>
                <button className="edit-btn2">Edit</button>
                <button className="delete-btn2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3>Customer Testimonials</h3>
        <Link to='/PostDestination'>
        <button className="add-btn2">Add Testimonial</button></Link>
        <ul>
          {testimonials.map(testimonial => (
            <li key={testimonial.id} className='dashboard_list'>
              {testimonial.user}: {testimonial.comment}
              <div>
              <button className="edit-btn2">Edit</button>
              <button className="delete-btn2">Delete</button>
              </div>
         
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;

