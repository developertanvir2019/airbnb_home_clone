import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Ratings from "./components/Ratings";
import RoomDetails from "./components/RoomDetails";
import ThingsToKnow from "./components/ThingsToKnow";

function App() {
  return (
    <div className="lg:px-28 xl:px-28 2xl:px-96">
      <Navbar />
      <Hero />
      <RoomDetails />
      <Ratings />
      <Map />
      <ThingsToKnow />
      <Footer />
    </div>
  );
}

export default App;
