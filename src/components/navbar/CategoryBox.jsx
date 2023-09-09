const CategoryBox = ({ icon: Icon, label, categoryName, setCategoryName }) => {
  return (
    <div
      onClick={() => setCategoryName(label)}
      className={`
        flex 
        me-6
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${
          categoryName === label ? "border-b-neutral-800" : "border-transparent"
        }
        ${categoryName === label ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
