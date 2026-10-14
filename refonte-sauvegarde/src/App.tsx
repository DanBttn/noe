import { useCallback, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CardModal from './components/CardModal';
import { CARDS, type CardId } from './data/cards';
import { useSiteAnimations, useSmoothScroll } from './motion';

function App() {
  const root = useRef<HTMLDivElement>(null);
  useSmoothScroll();
  useSiteAnimations(root);

  const [openCard, setOpenCard] = useState<CardId | null>(null);
  const closeCard = useCallback(() => setOpenCard(null), []);

  return (
    <div ref={root} className="min-h-screen" style={{ backgroundColor: '#555849' }}>
      <div
        data-progress
        className="fixed top-0 left-0 w-full h-0.5 bg-[#7B2D26] origin-left z-[60]"
        style={{ transform: 'scaleX(0)' }}
      ></div>
      <Header />
      <Hero onOpenCard={setOpenCard} />
      <About />
      <Marquee />
      <Menu onOpenCard={setOpenCard} />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
      {openCard && <CardModal key={openCard} card={CARDS[openCard]} onClose={closeCard} />}
    </div>
  );
}

export default App;
