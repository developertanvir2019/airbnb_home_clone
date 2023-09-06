import React from "react";
import HostDetails from "./HostDetails";
import AboutPlace from "./AboutPlace";
import BedRoom from "./BedRoom";
import PlaceDetails from "./PlaceDetails";
import Calendar from "./Calendar";
import host from "../assets/images/host.webp";

const RoomDetails = () => {
  return (
    <div className="py-12 relative">
      <div class="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <div className="flex justify-between">
            <div>
              {" "}
              <h1 className="text-2xl font-medium">
                Room in a rental unit hosted by Sagrario
              </h1>
            </div>
            <div className="w-10">
              <img className=" rounded-full" src={host} alt="avatar" />
            </div>
          </div>

          <div class=" body-font">
            <div class="container py-5 mx-auto">
              <div class="flex flex-wrap md:space-y-0 space-y-6">
                <div class="border-2 rounded-xl items-center border-r-2 p-4 md:w-1/3 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
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
                      <path d="M26 4a2 2 0 0 1 2 1.85v7.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H4v2H2v-9.68a3 3 0 0 1 .09-.71l.06-.23L4 13.84V6a2 2 0 0 1 1.7-1.98l.15-.01L6 4zm2 18H4v4h24zm-1.39-6H5.4l-1.34 4h23.9zM26 6H6v8h2v-4a2 2 0 0 1 1.85-2H22a2 2 0 0 1 2 1.85V14h2zm-11 4h-5v4h5zm7 0h-5v4h5z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">1 double bed</div>
                </div>
                <div class="border-2 rounded-xl items-center p-4 md:w-1/3 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">Shared bathroom</div>
                </div>
                <div class="border-2 rounded-xl items-center p-4 md:w-1/3 flex">
                  <div class="w-12 h-12 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow">Host and other guests may be here</div>
                </div>
              </div>
            </div>
          </div>

          {/* Room details  */}
          <div className="">
            <div class="text-gray-600 body-font">
              <div class="container py-8 border-t-2 border-b-2">
                <div class="flex relative pb-2 sm:items-center">
                  <div class="flex-grow  flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 inline-flex">
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
                        }}
                      >
                        <path d="M17 6a2 2 0 0 1 2 1.85v8.91l.24.24H24v-3h-3a1 1 0 0 1-.98-1.2l.03-.12 2-6a1 1 0 0 1 .83-.67L23 6h4a1 1 0 0 1 .9.58l.05.1 2 6a1 1 0 0 1-.83 1.31L29 14h-3v3h5a1 1 0 0 1 1 .88V30h-2v-3H20v3h-2v-3H2v3H0V19a3 3 0 0 1 1-2.24V8a2 2 0 0 1 1.85-2H3zm13 13H20v6h10zm-13-1H3a1 1 0 0 0-1 .88V25h16v-6a1 1 0 0 0-.77-.97l-.11-.02zm8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17 8H3v8h2v-3a2 2 0 0 1 1.85-2H13a2 2 0 0 1 2 1.85V16h2zm-4 5H7v3h6zm13.28-5h-2.56l-1.33 4h5.22z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-4 mt-6 sm:mt-0">
                      <h2 class="font-bold title-font text-gray-900 mb-1 text-base">
                        Room in a rental unit
                      </h2>
                      <p class="leading-relaxed text-sm">
                        Your own room in a home, plus access to shared spaces.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pb-2 sm:items-center">
                  <div class="flex-grow flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 inline-flex">
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
                        }}
                      >
                        <path d="M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-4 mt-6 sm:mt-0">
                      <h2 class="font-bold title-font text-gray-900 mb-1 text-base">
                        Dedicated workspace
                      </h2>
                      <p class="leading-relaxed text-sm">
                        A room with wifi that’s well-suited for working.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex relative sm:items-center">
                  <div class="flex-grow  flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 inline-flex">
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
                        }}
                      >
                        <path d="M16 17a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM25.67.33a2 2 0 0 1 2 1.85v6.54a2 2 0 0 1-.97 1.7l-.14.08-9.67 4.84a2 2 0 0 1-1.61.07l-.17-.07-9.67-4.84a2 2 0 0 1-1.1-1.62V2.33a2 2 0 0 1 1.84-2h.15zm0 2H6.33v6.39L16 13.55l9.67-4.83z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-4 mt-6 sm:mt-0">
                      <h2 class="font-bold title-font text-gray-900 mb-1 text-base">
                        Sagrario is a Superhost
                      </h2>
                      <p class="leading-relaxed text-sm">
                        Superhosts are experienced, highly rated hosts who are
                        committed to providing great stays for guests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex py-8 border-b-2 relative sm:items-center">
                <div class="flex-grow  flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "16px",
                        width: "16px",
                      }}
                    >
                      <path d="M9 0a1 1 0 0 1 1 .88V6h5a1 1 0 0 1 1 .88V15a1 1 0 0 1-.88 1H7a1 1 0 0 1-1-.88V10H1a1 1 0 0 1-1-.88V1a1 1 0 0 1 .88-1H9zm1.73 7-1.4.5.24.21.13.13c.12.13.23.25.3.36l.08.1.05.07.04.08H7.31v1.3h1.2l.17.53.1.26.1.3A6.3 6.3 0 0 0 10 12.61c-.5.32-1.12.61-1.87.87l-.33.11-.35.11-.44.14.72 1.15.4-.13.4-.12c1-.35 1.83-.76 2.48-1.22.57.4 1.28.77 2.12 1.08l.37.14.38.12.41.13.72-1.15-.45-.14-.26-.08-.34-.11a9.23 9.23 0 0 1-1.94-.9 6.3 6.3 0 0 0 1.07-1.7l.13-.31.11-.33.17-.52h1.2V8.45h-3.05l-.1-.23A3.7 3.7 0 0 0 11 7.3l-.12-.15-.14-.15zm1.35 2.76-.04.13-.08.22-.1.27a4.99 4.99 0 0 1-.86 1.38 4.95 4.95 0 0 1-.74-1.13l-.12-.25-.1-.27-.08-.22-.04-.13h2.16zM9 1H1v8h5V7l.01-.17H3.83L3.43 8H2l2.26-6h1.48l1.5 4H9V1zM5 3.41 4.25 5.6h1.5L5 3.41z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow sm:pl-3 mt-6 sm:mt-0">
                    <p class="leading-relaxed text-base">
                      Some info has been automatically translated.{" "}
                      <span className="underline font-medium text-black ">
                        Show original language
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HostDetails />
          <AboutPlace />
          <BedRoom />
          <PlaceDetails />
          <Calendar />
        </div>
        <div style={{ height: "100%" }} className="ml-16 col-span-1 relative">
          <div className="p-6 border-2 rounded-xl top-14 sticky">
            <div className="flex items-end justify-between">
              <div className="flex items-end">
                <h1 className="font-bold text-2xl pr-2">$37</h1>
                <p className="">night</p>
              </div>
              <div>
                <p>
                  <span className="font-bold">4.87</span> · 171 reviews
                </p>
              </div>
            </div>
            <div className="border-2 text-xs my-4 rounded-xl">
              <div className="grid grid-cols-2">
                <div className="col-span-1 border p-2">
                  <p className="font-bold">CHECK-IN</p>
                  <p>11/13/2023</p>
                </div>
                <div className="col-span-1 border p-2">
                  {" "}
                  <p className="font-bold">CHECKOUT</p> <p>11/18/2023</p>{" "}
                </div>
              </div>
              <div className="p-2">
                <h1 className="font-bold">GUEST</h1>
                <p>1 guest</p>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <button className="cols-span-1 w-full bg-[#d80666] py-2 font-bold rounded-xl text-white">Check availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
