import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // ✅ Add this line

import Home from './pages/Home.jsx';
import ClubK from './pages/ClubK.jsx';
import FeaturedEntertainers from './pages/FeaturedEntertainers.jsx';
import BookingPage from './pages/BookingPage.jsx';
import Events from './pages/Events.jsx';
import Contacts from './pages/Contacts.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop /> {/* ✅ Automatically scrolls to top on route change */}
      <Header setIsModalOpen={setIsModalOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          }
        />
        <Route path="/club-k" element={<ClubK />} />
        <Route path="/featured-entertainers" element={<FeaturedEntertainers />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
