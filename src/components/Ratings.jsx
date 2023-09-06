import React from "react";
import Reviews from "./Reviews";

const Ratings = () => {
  return (
    <div className="py-12 border-y-2">
        <div className="">
      <div className="pb-8">
        <h1 className="text-2xl flex items-center font-medium">
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
                height: "16px",
                width: "16px",
                fill: "currentcolor",
              }}
            >
              <path
                fill-rule="evenodd"
                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
              ></path>
            </svg>
          </span>
          4.87 · 171 reviews
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="grid grid-cols-2">
              <div className="cols-span-1">Cleanliness</div>
              <div className="cols-span-1">
                <dl>
                  <dd class="flex items-center mb-4">
                    <div class="md:w-32 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                      <div
                        class="bg-black h-1 rounded dark:bg-dark-700"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-700">
                      4.9
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="cols-span-1">Communication</div>
              <div className="cols-span-1">
                {" "}
                <dl>
                  <dd class="flex items-center mb-4">
                    <div class="md:w-32 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                      <div
                        class="bg-black h-1 rounded dark:bg-dark-700"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-700">
                      5.0
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="cols-span-1">Check-in</div>
              <div className="cols-span-1">
                {" "}
                <dl>
                  <dd class="flex items-center mb-4">
                    <div class="md:w-32 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                      <div
                        class="bg-black h-1 rounded dark:bg-dark-700"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-700">
                      5.0
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2">
              <div className="cols-span-1">Accuracy</div>
              <div className="cols-span-1">
                <dl>
                  <dd class="flex items-center mb-4">
                    <div class="md:w-32 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                      <div
                        class="bg-black h-1 rounded dark:bg-dark-700"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-700">
                      4.9
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="cols-span-1">Location</div>
              <div className="cols-span-1">
                {" "}
                <dl>
                  <dd class="flex items-center mb-4">
                    <div class="md:w-32 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                      <div
                        class="bg-black h-1 rounded dark:bg-dark-700"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-700">
                      5.0
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="cols-span-1">Value</div>
              <div className="cols-span-1">
                {" "}
                <dl>
                  <dd class="flex items-center mb-4">
                    <div class="md:w-32 bg-gray-200 rounded h-1 dark:bg-gray-200 mr-2">
                      <div
                        class="bg-black h-1 rounded dark:bg-dark-700"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-700">
                      5.0
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Reviews/>
    </div>
  );
};

export default Ratings;
