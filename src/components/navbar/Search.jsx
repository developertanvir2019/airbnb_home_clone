import { BiSearch } from "react-icons/bi";
import "./search.css";

const Search = () => {
  return (
    <>
      <div
        onClick={() => {
          document.getElementById("my_modal_4").showModal();
          document.getElementById("modal99").showModal();
        }}
        className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
      >
        <div
          className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
        >
          <div
            className="
            text-sm 
            font-semibold 
            px-6
          "
          >
            Anywhere
          </div>
          <div
            className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
          >
            Any Week
          </div>
          <div
            className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
          >
            <div className="hidden sm:block">Add guest</div>
            <div
              className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
            >
              <BiSearch size={18} />
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Search;
