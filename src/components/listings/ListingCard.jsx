import HeartButton from "./Button";

const ListingCard = ({ hideDetails, hotel }) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={hotel?.imgUrl}
            alt="Listing"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton />
          </div>
        </div>

        <div className="font-semibold text-lg">
          {hotel?.region}, {hotel?.country}
        </div>
        <div className="font-light text-neutral-500">{hotel?.date}</div>
        <div className="font-semibold">$ {hotel?.price}</div>
        <div className={!hideDetails ? "hidden" : "block"}>
          <p>${hotel?.price - hotel?.tax} total before taxes</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
