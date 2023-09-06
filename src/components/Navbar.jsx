import React from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/placeholder.jpg";

const Navbar = () => {
  return (
    <div className="navbar py-4 bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <img width={102} height={32} src={logo} alt="logo" />
        </div>
      </div>

      <div className="pt-2 relative mx-auto text-gray-600">
        <input
          className="p-4 border-2 border-gray-300 h-10 px-5 pr-16 rounded-3xl text-sm focus:outline-none shadow-md"
          type="search"
          name="search"
          placeholder="Start your Search"
        />
        <button
          type="submit"
          className="absolute -right-2 top-0 mt-3 mr-4 bg-[#ff385c] p-2 rounded-full"
        >
          <svg
            className="text-gray-600 h-4 w-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      <div className="navbar-end ali">
        <div className="dropdown flex  dropdown-end">
          <div className="flex items-center">
            {" "}
            <h2 className="text-md font-semibold">Airbnb your home</h2>
          </div>
          <div className="flex items-center mx-3">
            <svg
              className="h-5 w-5"
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M194.27,34.43 c-10.879,10.942-20.817,25.328-29.403,43.945c-6.558,14.217-12.228,30.589-16.964,46.343H67.21 C97.373,81.395,142.101,49,194.27,34.43z M51.43,150.974h89.971c-6.111,28.882-9.67,60.39-10.408,91.897H26.607 C28.398,210.051,37.15,179.856,51.43,150.974z M26.673,269.128h104.35c0.8,32.82,4.418,64.328,10.6,91.897H51.98 C37.534,333.456,28.614,303.262,26.673,269.128z M67.933,387.282h80.266c4.676,17.067,10.245,31.772,16.666,45.693 c8.413,18.238,18.206,32.647,28.936,43.817C142.251,462.276,97.995,430.605,67.933,387.282z M242.872,483.601 c-24.944-8.623-51.007-42.493-67.465-96.319h67.465V483.601z M242.872,361.026H168.34c-6.236-26.256-10.214-57.764-11.062-91.897 h85.593V361.026z M242.872,242.872h-85.613c0.776-31.508,4.54-63.015,11.001-91.897h74.612V242.872z M242.872,124.718H175.26 c3.898-11.815,8.174-24.25,13.232-35.216c15.353-33.288,34.687-54.59,54.38-61.13V124.718z M485.393,242.872H381.007 c-0.738-31.508-4.296-63.015-10.408-91.897h89.971C474.85,179.856,483.602,210.051,485.393,242.872z M444.79,124.718h-80.693 c-4.737-15.754-10.405-31.996-16.963-46.213c-8.524-18.481-18.091-33.049-28.51-43.962 C370.411,49.232,414.799,82.708,444.79,124.718z M269.128,28.652c19.692,6.875,38.816,28.047,53.946,60.849 c5.058,10.966,9.767,23.401,13.665,35.216h-67.612V28.652z M269.128,150.974h74.612c6.46,28.882,10.226,60.39,11.001,91.897 h-85.613V150.974z M269.128,269.128h85.593c-0.848,34.133-4.826,65.641-11.062,91.897h-74.531V269.128z M269.128,483.316v-96.034 h67.465C320.319,439.795,295.385,474.221,269.128,483.316z M319.588,476.525c10.013-11.117,19.234-25.659,27.546-43.68 c6.421-13.921,11.99-28.496,16.666-45.563h80.266C414.275,430.605,370.545,461.827,319.588,476.525z M460.02,361.026h-89.642 c6.181-27.569,9.8-59.077,10.6-91.897h104.35C483.386,303.262,474.466,333.456,460.02,361.026z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <img src={avatar} alt="avatar" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
