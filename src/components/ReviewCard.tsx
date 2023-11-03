import { star } from "../assets/icons";

interface Review {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={review.imgURL}
        alt={review.customerName}
        className="w-[280px] h-[280px] rounded-full object-cover"
      />
      <p className="mt-4 max-w-sm info-text text-center">{review.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-grey">
          (4.5)
        </p>
      </div>

      <p className="mt-1 text-3xl leading-normal font-semibold font-palanquin">
        {review.customerName}
      </p>
    </div>
  );
};

export default ReviewCard;
