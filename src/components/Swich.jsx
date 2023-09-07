import React from "react";

const Swich = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-auto border-[1px] py-4 px-3 rounded-lg">
        <div>
          <p className="font-semibold">
            Display Total Price{"   "}
            <span className="text-gray-500">
              &nbsp; |&nbsp; &nbsp;includes all fees, before taxes
            </span>
          </p>
        </div>
        <div className="ms-16">
          <input type="checkbox" className="toggle" />
        </div>
      </div>
    </div>
  );
};

export default Swich;
