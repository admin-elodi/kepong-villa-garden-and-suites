import Hero from '../components/Hero.jsx';
import QuickLinks from '../components/QuickLinks.jsx';
import DroneOrderModal from '../components/DroneOrderModal.jsx';

function Home({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      <main>
        <Hero setIsModalOpen={setIsModalOpen} />
        <QuickLinks />
      
      </main>
      <DroneOrderModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default Home;