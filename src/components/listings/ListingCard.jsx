import HeartButton from "./Button";

const ListingCard = ({ hideDetails }) => {
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
            src="https://a0.muscache.com/im/pictures/4311ce8c-007d-4e69-8c08-8a540ab8ec2f.jpg?im_w=720"
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
          {/* {location?.region}, {location?.label} */}
          Dhaka,Bangladesh
        </div>
        <div className="font-light text-neutral-500">
          {/* {reservationDate || data.category} */}
          12--7-2002
        </div>
        <div className="font-semibold">{/* $ {price} */}$30239</div>
        <div className={!hideDetails ? "hidden" : "block"}>
          <p>$285 total before taxes</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
