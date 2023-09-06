import React from "react";

const AboutPlace = () => {
  return (
    <div className="py-12">
      <div className="">
        <h1 className="text-2xl font-medium pb-4">About this place</h1>
        <p className="pb-4">
          Nice and spacious room in the heart of Valencia, with double bed and a
          balcony. Silent because there is no traffic. Surrounded by all the
          landmarks , museums , cathedral , leisure, and close to the beach
          where you can go by bike, bus , tram or car if your means of
          transportation. I would love to receive people wanting to enjoy my
          city and help in what I can .
        </p>
        <p className="flex items-center underline font-bold">
          Show more{" "}
          <span className="pl-2">
            <svg
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{height: "12px", width: "12px", display: "block"}}
            >
              <path
                d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutPlace;
