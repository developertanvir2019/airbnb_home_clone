import React from "react";

const ThingsToKnow = () => {
  return (
    <div className="py-12 border-t-2">
      <h1 className="text-2xl font-medium pb-8">Things to know</h1>
      <div className="grid grid-cols-3 text-base">
        <div className="col-span-1">
          <p className="font-bold pb-2">House rules</p>
          <p className="pb-2">Check-in after 2:00 PM</p>
          <p className="pb-2">Checkout before 11:00 AM</p>
          <p className="pb-2">2 guests maximum</p>
          <p className="flex  pt-4 items-center underline font-bold">
            Show more{" "}
            <span className="pl-2">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{ height: "12px", width: "12px", display: "block" }}
              >
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </p>
        </div>
        <div className="col-span-1">
          <p className="font-bold pb-2">Safety & property</p>
          <p className="pb-2">Security camera/recording device</p>
          <p className="pb-2">Carbon monoxide alarm</p>
          <p className="pb-2">Smoke alarm</p>
          <p className="flex  pt-4 items-center underline font-bold">
            Show more{" "}
            <span className="pl-2">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{ height: "12px", width: "12px", display: "block" }}
              >
                <path
                  d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </span>
          </p>
        </div>
        <div className="col-span-1">
          <p className="font-bold pb-2">Cancellation policy</p>
          <p className="pb-2">
            Add your trip dates to get the cancellation details for this stay.
          </p>
          <p className="flex items-center pt-4 underline font-bold">
            Add dates{" "}
            <span className="pl-2">
              <svg
                viewBox="0 0 18 18"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{ height: "12px", width: "12px", display: "block" }}
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
    </div>
  );
};

export default ThingsToKnow;
