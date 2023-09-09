import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Swich from "../components/Swich";
import AllHouse from "../components/listings/AllHouse";
import Footer from "../components/Footer";
import Categories from "../components/navbar/Categories";

const Home = () => {
  const [hideDetails, setHideDetails] = useState(true);
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectBed, setSelectBed] = useState(null);
  const [selectBathroom, setSelectBathroom] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [minValue, set_minValue] = useState(null);
  const [maxValue, set_maxValue] = useState(null);
  return (
    <>
      <Navbar />
      <Categories
        selectedBedroom={selectedBedroom}
        selectBed={selectBed}
        selectBathroom={selectBathroom}
        setSelectedBedroom={setSelectedBedroom}
        setSelectBed={setSelectBed}
        setSelectBathroom={setSelectBathroom}
        hotels={hotels}
        minValue={minValue}
        set_minValue={set_minValue}
        maxValue={maxValue}
        set_maxValue={set_maxValue}
      />
      <Swich setHideDetails={setHideDetails} hideDetails={hideDetails} />
      <AllHouse
        hideDetails={hideDetails}
        selectedBedroom={selectedBedroom}
        selectBed={selectBed}
        selectBathroom={selectBathroom}
        hotels={hotels}
        setHotels={setHotels}
        maxValue={maxValue}
        minValue={minValue}
      />
      <Footer />
    </>
  );
};

export default Home;
