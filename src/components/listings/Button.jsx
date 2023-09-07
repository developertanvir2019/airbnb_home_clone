import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton = () => {
  const [heard, setHeard] = useState(false);
  return (
    <div
      onClick={() => setHeard(!heard)}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={heard ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
