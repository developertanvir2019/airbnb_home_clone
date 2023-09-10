import React, { useEffect } from "react";
import ListingCard from "./ListingCard";
import axios from "axios";

const AllHouse = ({
  hideDetails,
  selectedBedroom: room,
  selectBed: bed,
  selectBathroom: bathroom,
  hotels,
  setHotels,
  minValue,
  maxValue,
  categoryName,
  searchText,
}) => {
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          "https://hero-server-july.vercel.app/api/hotel",
          {
            params: {
              room,
              bed,
              bathroom,
              minValue,
              maxValue,
              categoryName,
              country: searchText,
            },
          }
        );

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
  }, [
    room,
    bed,
    bathroom,
    setHotels,
    minValue,
    maxValue,
    categoryName,
    searchText,
  ]);
  return (
    <>
      {hotels?.length ? (
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
      ) : (
        <div className="flex justify-center">
          <h2 className="font-bold text-3xl text-red-600">No Data Found</h2>
        </div>
      )}
    </>
  );
};

export default AllHouse;
