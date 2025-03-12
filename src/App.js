import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import KashmirTour from './pages/KashmirTour.js';
import Book from './pages/Book';
import RajasthanTour from './pages/RajasthanTour.js';
import LadakhTour from './pages/LadakhTour.js';
// import HimachalTour from './pages/HimachalTour';
// import KeralaTour from './pages/KeralaTour';
// import GoaTour from './pages/GoaTour';
// import GoldenTriangle from './pages/GoldenTriangle';
// import SameDayTour from './pages/SameDayTour';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/kashmir" element={<KashmirTour />} />
        <Route path="/booking" element={<Book />} />
        <Route path="/rajasthan" element={<RajasthanTour />} />
        <Route path="/ladakh" element={<LadakhTour />} />
        {/* <Route path="/himachal" element={<HimachalTour />} />
        <Route path="/kerala" element={<KeralaTour />} />
        <Route path="/goa" element={<GoaTour />} />
        <Route path="/golden-triangle" element={<GoldenTriangle />} />
        <Route path="/same-day" element={<SameDayTour />} />  */} 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
