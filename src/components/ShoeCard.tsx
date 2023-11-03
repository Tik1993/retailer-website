interface Props {
  thumbnail: string;
  bigShoe: string;
  shownShoeImage: string;
  changeShownShoeImage: (img: string) => void;
}

const ShoeCard = ({
  thumbnail,
  bigShoe,
  shownShoeImage,
  changeShownShoeImage,
}: Props) => {
  const handleClick = () => {
    if (shownShoeImage !== bigShoe) {
      changeShownShoeImage(bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        shownShoeImage === bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover p-4 sm:w-40 sm:h-40 rounded-xl">
        <img
          src={thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
