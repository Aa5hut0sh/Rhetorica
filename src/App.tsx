
import Hero from './components/hero';
import About from './components/About';
import Stats from './components/Stats';
import Timer from './components/timer';
import Events from './components/Events';
import Collab from './components/Collab';
import Map from './components/Map';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white antialiased overflow-x-hidden selection:bg-yellow-200">
      <Hero />
      <div className="flex flex-col gap-16 md:gap-24 w-full">
        <About />
        <Stats />
        <Timer />
        <Events />
        <Collab />
        <Map />
        <Footer />
      </div>
    </div>
  );
}