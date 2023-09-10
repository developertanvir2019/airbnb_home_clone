import React, { useState } from "react";
import "./modal.css";
import { BiSearch } from "react-icons/bi";

const Modal = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <dialog id="my_modal_4" className="modal modal-top mt-20">
        <div className="modal-box w-full">
          <>
            <div className=" bg-gray-200 border-[1px]  w-2/3   rounded-full mx-auto shadow-sm transition  cursor-pointer ">
              <div className="flex flex-row items-center justify-between">
                <div
                  className={`py-2 ${
                    activeTab === 1 ? "bg-white rounded-2xl" : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <h5 className=" text-sm font-semibold px-6">Where</h5>
                  <input
                    className={`ms-4 rounded-lg ${
                      activeTab === 1 ? "bg-white" : "bg-gray-200"
                    }`}
                    placeholder="Search destination"
                    type="text"
                  />
                </div>
                <div
                  className={`hidden sm:block  px-6  border-x-[1px]  flex-1 text-center py-2 ${
                    activeTab === 2 ? "bg-white rounded-2xl" : ""
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  <h5 className=" text-sm font-semibold px-6">Check in</h5>
                  <p className="text-sm text-gray-500">Add dates</p>
                </div>
                <div
                  className={`hidden sm:block  px-6  border-x-[1px]  flex-1 text-center py-2 ${
                    activeTab === 3 ? "bg-white rounded-2xl" : ""
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  <h5 className=" text-sm font-semibold px-6">Check out</h5>
                  <p className="text-sm text-gray-500">Add dates</p>
                </div>
                <div
                  className={`hidden sm:block  px-6  border-x-[1px]  flex-1 text-center py-2 ${
                    activeTab === 4 ? "bg-white rounded-2xl" : ""
                  }`}
                  onClick={() => handleTabClick(4)}
                >
                  <h5 className=" text-sm font-semibold px-6">Who</h5>
                  <p className="text-sm text-gray-500">Add Guests</p>
                </div>
                <div className="text-sm  pl-6  pr-2  text-gray-600 flex flex-row items-center gap-3 py-2">
                  <div className=" px-4 py-3 bg-rose-500  rounded-xl flex text-white">
                    <BiSearch size={18} /> <span>Search</span>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
