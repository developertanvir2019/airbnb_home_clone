import { TbBeach, TbMountain } from "react-icons/tb";
import { GiBoatFishing, GiCastle, GiIsland } from "react-icons/gi";
import { BsSnow } from "react-icons/bs";
import CategoryBox from "./CategoryBox";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

export const categories = [
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Tropical",
    icon: GiIsland,
    description: "This property is on an Tropical",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Iconic city",
    icon: GiCastle,
    description: "This property is an ancient iconic city!",
  },
];

const Categories = () => {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  // bedrooms
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectBed, setSelectBed] = useState(null);
  const [selectBathroom, setSelectBathroom] = useState(null);
  console.log(selectedBedroom, selectBed, selectBathroom);
  const bedrooms = [1, 2, 3, 4, 5, 6];
  const handleBedroomClick = (buttonValue) => {
    setSelectedBedroom(buttonValue);
  };

  // beds
  const bed = [1, 2, 3, 4, 5, 6, 7];
  const handleBedClick = (value) => {
    setSelectBed(value);
  };

  // bathrooms
  const bathrooms = [1, 2, 3, 4, 5, 6];
  const handleBathroom = (value) => {
    setSelectBathroom(value);
  };

  return (
    <>
      <div className="px-6 flex justify-between items-center py-4">
        <div
          className="
          flex 
          flex-row 
          items-center 
          overflow-x-auto
        "
        >
          {categories.map((item) => (
            <CategoryBox key={item.label} label={item.label} icon={item.icon} />
          ))}
        </div>
        <div
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="flex btn lowercase me-3"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 2"
            viewBox="0 0 30 30"
            id="filter"
          >
            <path
              fill="#111224"
              d="M17 11H4A1 1 0 0 1 4 9H17A1 1 0 0 1 17 11zM26 11H22a1 1 0 0 1 0-2h4A1 1 0 0 1 26 11z"
            ></path>
            <path
              fill="#111224"
              d="M19.5 13.5A3.5 3.5 0 1 1 23 10 3.5 3.5 0 0 1 19.5 13.5zm0-5A1.5 1.5 0 1 0 21 10 1.5 1.5 0 0 0 19.5 8.5zM26 21H13a1 1 0 0 1 0-2H26A1 1 0 0 1 26 21zM8 21H4a1 1 0 0 1 0-2H8A1 1 0 0 1 8 21z"
            ></path>
            <path
              fill="#111224"
              d="M10.5,23.5A3.5,3.5,0,1,1,14,20,3.5,3.5,0,0,1,10.5,23.5Zm0-5A1.5,1.5,0,1,0,12,20,1.5,1.5,0,0,0,10.5,18.5Z"
            ></path>
          </svg>
          <p>Filters</p>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        {/* <div className="modal-box w-11/12 max-w-4xl"> */}
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <label className="font-semibold mb-2">Price Range:</label>
            <MultiRangeSlider
              min={0}
              max={100}
              step={5}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
            />
            <div className="flex mt-3 font-semibold items-center">
              <input
                value={`$${minValue}`}
                readOnly
                type="text"
                placeholder="Minimum"
                className="input input-bordered input-md w-full max-w-xs"
              />
              -
              <input
                value={`$${maxValue}`}
                readOnly
                type="text"
                placeholder="Maximum"
                className="input input-bordered input-md w-full max-w-xs"
              />
            </div>
            {/* bedrooms  */}
            <h3 className="font-semibold mt-3">Bedrooms</h3>
            <div className="flex space-x-4">
              {bedrooms.map((buttonValue) => (
                <button
                  key={buttonValue}
                  className={`${
                    selectedBedroom === buttonValue
                      ? "bg-black text-white"
                      : "border"
                  } px-4 py-2 rounded`}
                  onClick={() => handleBedroomClick(buttonValue)}
                >
                  {buttonValue}
                </button>
              ))}
            </div>
            <h3 className="font-semibold mt-3">Bed</h3>
            <div className="flex space-x-4">
              {bed.map((buttonValue) => (
                <button
                  key={buttonValue}
                  className={`${
                    selectBed === buttonValue ? "bg-black text-white" : "border"
                  } px-4 py-2 rounded`}
                  onClick={() => handleBedClick(buttonValue)}
                >
                  {buttonValue}
                </button>
              ))}
            </div>
            <h3 className="font-semibold mt-3">Bathrooms</h3>
            <div className="flex space-x-4">
              {bathrooms.map((buttonValue) => (
                <button
                  key={buttonValue}
                  className={`${
                    selectBathroom === buttonValue
                      ? "bg-black text-white"
                      : "border"
                  } px-4 py-2 rounded`}
                  onClick={() => handleBathroom(buttonValue)}
                >
                  {buttonValue}
                </button>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Categories;
