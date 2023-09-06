import React from "react";
import host from "../assets/images/host.webp";

const HostDetails = () => {
  return (
    <div className="bg-[#f0efe9] items-center py-3">
      <div className="flex justify-center">
        {/* card */}
        <div className=" bg-white w-96 flex justify-between px-8 py-6 rounded-xl shadow-2xl mt-8">
          <div className="mx-auto">
            <div>
              <div class="relative inline-block">
                <img
                  class="rounded-full"
                  width="100"
                  height="100"
                  src={host}
                  alt="host"
                />
                <span class="absolute top-20 right-3 transform translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-sm px-2 py-1 rounded-full">
                  &#x2713;
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold py-2">Sagrario</h1>
                <p className="flex items-center text-sm font-semibold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "12px",
                        width: "12px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m8.5 7.6 3.1-1.75 1.47-.82a.83.83 0 0 0 .43-.73V1.33a.83.83 0 0 0-.83-.83H3.33a.83.83 0 0 0-.83.83V4.3c0 .3.16.59.43.73l3 1.68 1.57.88c.35.2.65.2 1 0zm-.5.9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                    </svg>
                  </span>
                  Superhost
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div>
              <h2 className="text-2xl font-semibold">316</h2>
              <small className="pb-2 font-semibold">Reviews</small>
            </div>
            <hr />
            <div>
              <h2 className="text-2xl font-semibold">4.86</h2>
              <small className="pb-2 font-semibold">Rating</small>
            </div>
            <hr />
            <div>
              <h2 className="text-2xl font-semibold">6</h2>
              <small className="pb-2 font-semibold">Years hosting</small>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 mx-auto my-4">
        <p className="flex items-center py-2">
          {" "}
          <span className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"></path>
            </svg>
          </span>
          Born in the 60s
        </p>
        <p className="flex items-center py-2">
          {" "}
          <span className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="M20 2a2 2 0 0 1 2 1.85V6h6a3 3 0 0 1 3 2.82V27a3 3 0 0 1-2.82 3H4a3 3 0 0 1-3-2.82V9a3 3 0 0 1 2.82-3H10V4a2 2 0 0 1 1.85-2H12zm8 6H4a1 1 0 0 0-1 .88V12a3 3 0 0 0 2.82 3H13v2H6a4.98 4.98 0 0 1-3-1v11a1 1 0 0 0 .88 1H28a1 1 0 0 0 1-.88V16c-.78.59-1.74.95-2.78 1h-7.17v-2H26a3 3 0 0 0 3-2.82V9a1 1 0 0 0-.88-1zm-10 4a1 1 0 0 1 1 .88V19a1 1 0 0 1-.88 1H14a1 1 0 0 1-1-.88V13a1 1 0 0 1 .88-1H14zm-1 2h-2v4h2zm3-10h-8v2h8z"></path>
            </svg>
          </span>
          My work: coach
        </p>
        <p className="flex items-center py-2">
          {" "}
          <span className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="m28 2.12-.22.01-16 1.78A2 2 0 0 0 10 5.89v15.14A4.95 4.95 0 0 0 7 20a5 5 0 1 0 5 5V11.9l16-1.78v8.9A4.95 4.95 0 0 0 25 18a5 5 0 1 0 5 5V4.12a2 2 0 0 0-2-2zM7 28a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5-18.12V5.9l16-1.77V8.1L12 9.88zM25 26a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
            </svg>
          </span>
          Favorite song in high school: Resistiré
        </p>
        <p className="flex items-center py-2">
          {" "}
          <span className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="M6 23v3h3v2H6v3H4v-3H1v-2h3v-3h2zm9.04-19.29c.28-.9 1.52-.95 1.88-.12l.04.12 2.61 8.72 8.72 2.61c.86.26.94 1.4.22 1.82l-.1.06-.12.04-8.72 2.61-2.61 8.72c-.26.86-1.4.94-1.82.22l-.06-.1-.04-.12-2.61-8.72-8.72-2.61c-.87-.26-.94-1.4-.22-1.82l.1-.06.12-.04 8.72-2.61 2.61-8.72zM16 7.48l-1.81 6.04a1 1 0 0 1-.55.63l-.12.04L7.48 16l6.04 1.81a1 1 0 0 1 .57.45l.06.1.04.12L16 24.52l1.81-6.04a1 1 0 0 1 .45-.57l.1-.06.12-.04L24.52 16l-6.04-1.81a1 1 0 0 1-.57-.44l-.06-.12-.04-.11L16 7.48zM28 1v3h3v2h-3v3h-2V6h-3V4h3V1h2z"></path>
            </svg>
          </span>
          What makes my home unique: Good energy and feeling at home
        </p>
        <p className="flex items-center">
          {" "}
          <span className="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentcolor",
              }}
            >
              <path d="M0 18v-2h1.3A15.02 15.02 0 0 1 13.27 4.25a3 3 0 1 1 5.46 0c6 1.1 10.76 5.78 11.97 11.75H32v2zM16 6A13 13 0 0 0 3.35 16h25.3A13 13 0 0 0 16 6zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7.55 18.1a3.24 3.24 0 0 1 3.07 5.7l-.17.1-9.63 4.82a5 5 0 0 1-3.23.43l-.25-.05-7.84-2.01A2 2 0 0 1 4 27.31V22a2 2 0 0 1 1.85-2h11.26l.14.01L19 20c.92.01 1.44.7 1.57 1.59zm2.56 2.35a1.24 1.24 0 0 0-1.54-.6l-.12.04-4.37 2.19a3.89 3.89 0 0 1-3.34 1.91l-.24.01H12v-2h5a2 2 0 0 0 2-1.85V22l-3.7.02h-1.58L12.6 22l-.6-.01H6v5.15l7.83 2.01a3 3 0 0 0 1.9-.13l.2-.1 9.62-4.82c.61-.3.86-1.05.56-1.66z"></path>
            </svg>
          </span>
          For guests, I always: Help them enjoy Valencia
        </p>
      </div>
      <div className="w-96 mx-auto my-4">
        <p>
          Open and communicative, with donation of people and happy to welcome
          friends from the world at home.
        </p>
      </div>
      <div className="w-96 mx-auto mb-8">
      <p className="flex items-center underline font-bold">
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
      <div className="w-96 mx-auto my-4">
        <button className="bg-[#222222] px-6 py-2 rounded-lg text-white font-bold">
          Message Host
        </button>
      </div>
          
    </div>
  );
};

export default HostDetails;
