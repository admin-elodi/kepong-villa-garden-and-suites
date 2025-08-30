import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import ClubK from './pages/ClubK.jsx';
import FeaturedEntertainers from './pages/FeaturedEntertainers.jsx';
import BookingPage from './pages/BookingPage.jsx';
import Events from './pages/Events.jsx';
import KepongFoodies from './pages/KepongFoodies.jsx';
import FoodieDetail from './components/FoodieDetail.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔧 Centralized visibility control for all pages
  const visiblePages = {
    home: true,
    clubK: true,
    featuredEntertainers: true,   
    bookings: true,
    events: true, // 👈 Set to false to hide from UI and nav
    kepongFoodies: true,
    foodieDetail: true, // This is route-only, no nav link expected
  };

  return (
    
    <Router>
      
      <ScrollToTop />
      <Header visiblePages={visiblePages} setIsModalOpen={setIsModalOpen} />
      <Routes>
        {visiblePages.home && (
          <Route
            path="/"
            element={
              <Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            }
          />
        )}
        {visiblePages.clubK && <Route path="/club-k" element={<ClubK />} />}
        {visiblePages.featuredEntertainers && (
          <Route path="/featured-entertainers" element={<FeaturedEntertainers />} />
        )}
        {visiblePages.bookings && <Route path="/bookings" element={<BookingPage />} />}
        {visiblePages.events && <Route path="/events" element={<Events />} />}
        {visiblePages.kepongFoodies && (
          <Route path="/kepong-foodies" element={<KepongFoodies />} />
        )}
        {visiblePages.foodieDetail && (
          <Route path="/foodie/:slug" element={<FoodieDetail />} />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
