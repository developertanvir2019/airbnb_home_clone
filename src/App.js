import "./App.css";
import Footer from "./components/Footer";
import Swich from "./components/Swich";
import AllHouse from "./components/listings/AllHouse";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Swich />
      <AllHouse />
      <Footer />
    </div>
  );
}

export default App;
