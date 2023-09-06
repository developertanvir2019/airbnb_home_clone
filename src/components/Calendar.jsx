import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
const calendar = () => {
  const handleSelect = (date) => {
    console.log(date); // native Date object
  };
  return (
    <div className="py-12">
      <div>
        <h1 className="text-2xl font-medium pb-2">Select check-in date</h1>
        <p className="text-sm">Add your travel dates for exact pricing</p>
      </div>

      <div className="w-96">
        {" "}
        <Calendar
          style={{ width: "700px" }}
          date={new Date()}
          onChange={handleSelect}
        />
      </div>
    </div>
  );
};

export default calendar;
