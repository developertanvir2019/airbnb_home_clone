import React from "react";

const Map = () => {
  return (
    <section className="py-12">
      <div>
        <h1 className="text-2xl pb-6 font-medium">Where you’ll be</h1>
      </div>
      <div>
        <div class="md:h-96 text-gray-600 body-font relative">
          <div class="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              //   style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            ></iframe>
          </div>
          <div class="container px-3 py-5 mx-auto flex">
            <div class="lg:w-1/6 md:w-1/6 p-2  text-center bg-white rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h1>Public Transit</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold py-4">Valencia, Spain</h1>
        <p>
          In the center , next to the historic Cathedral, Garden tambén building
          on the river , and close to the beach. ideal for rest and go out and
          enjoy without having to move location.
        </p>
        <p className="flex mt-4 items-center underline font-bold">
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
    </section>
  );
};

export default Map;
