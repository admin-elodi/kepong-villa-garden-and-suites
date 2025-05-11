import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ClubK from './pages/ClubK.jsx';
import FeaturedEntertainers from './pages/FeaturedEntertainers.jsx';
import BookingPage from './pages/BookingPage.jsx';
import TreasureHunt from './pages/TreasureHunt.jsx';
import Contacts from './pages/Contacts.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <Header setIsModalOpen={setIsModalOpen} />
      <Routes>
        <Route path="/" element={<Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />} />
        <Route path="/club-k" element={<ClubK />} />
        <Route path="/featured-entertainers" element={<FeaturedEntertainers />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/treasure-hunt" element={<TreasureHunt />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;