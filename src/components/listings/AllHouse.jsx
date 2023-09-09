import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import axios from "axios";

const AllHouse = ({ hideDetails }) => {
  const [hotels, setHotels] = useState([]);
  const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");
  const [bathroom, setBathroom] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hotel", {
          params: {
            room,
            bed,
            bathroom,
          },
        });

        const formattedHotels = response.data.map((hotel) => ({
          ...hotel,
          date: new Date(hotel.date).toISOString().split("T")[0], // Format as YYYY-MM-DD
        }));
        setHotels(formattedHotels);
      } catch (error) {
        console.error("error fetching hotels", error);
      }
    };
    fetchHotels();
  }, [room, bed, bathroom]);

  return (
    <div className="lg:grid grid-cols-4 gap-5 mx-10">
      {hotels?.map((hotel) => {
        return (
          <ListingCard
            key={hotel?._id}
            hotel={hotel}
            hideDetails={hideDetails}
          />
        );
      })}
    </div>
  );
};

export default AllHouse;
