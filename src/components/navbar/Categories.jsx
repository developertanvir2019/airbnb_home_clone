import { TbBeach, TbMountain } from "react-icons/tb";
import { GiBoatFishing, GiCastle, GiIsland } from "react-icons/gi";
import { BsSnow } from "react-icons/bs";
import CategoryBox from "./CategoryBox";

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
  return (
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
      <div className="flex btn lowercase me-3">
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
  );
};

export default Categories;
