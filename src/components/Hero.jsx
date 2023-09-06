import React from "react";
import room from "../assets/images/room.webp";
import room2 from "../assets/images/room-2.webp";
import room3 from "../assets/images/room-3.webp";
import room4 from "../assets/images/room-4.webp";
import room5 from "../assets/images/room-5.webp";

const Hero = () => {
  return (
    <div>
       <div className="mt-6">
          <h1 className="text-2xl font-medium">
            Enjoy historic Valencia and close to the beach.
          </h1>
        </div>
       
        <div className="flex py-4 justify-between">
          <div className="flex text-sm gap-4">
            <p className="font-semibold"> 4.87 · <span className="underline"></span>171 reviews</p>
            <p>Superhost</p>
            <p className="font-semibold underline">Valencia, Spain</p>
          </div>
          <div className="flex gap-4">
            <p className="flex gap-2  items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    height: "16px",
                    width: "16px",
                    stroke: "black",
                  }}
                >
                  <g fill="none">
                    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path>
                  </g>
                </svg>
              </span>
              share
            </p>
            <p className="flex gap-2  items-center">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    height: "16px",
                    width: "16px",
                    stroke: "black",
                  }}
                >
                  <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                </svg>
              </span>
              save
            </p>
          </div>
        </div>

      <div class="grid grid-cols-2 gap-2">
        <div dir="ltr">
          <img src={room} className="rounded-s-xl" alt="room" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <img src={room2} alt="room-2" />
          </div>
          <div>
            <img className="rounded-tr-xl" src={room3} alt="room-2" />
          </div>
          <div>
            <img src={room4} alt="room-2" />
          </div>
          <div>
            <img className="rounded-br-xl" src={room5} alt="room-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
