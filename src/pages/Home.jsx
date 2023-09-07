import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Swich from "../components/Swich";
import AllHouse from "../components/listings/AllHouse";
import Footer from "../components/Footer";

const Home = () => {
  const [hideDetails, setHideDetails] = useState(true);
  return (
    <>
      <Navbar />
      <Swich setHideDetails={setHideDetails} hideDetails={hideDetails} />
      <AllHouse hideDetails={hideDetails} />
      <Footer />
    </>
  );
};

export default Home;
