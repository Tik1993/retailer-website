import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Says?
      </h2>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {" "}
        {reviews.map((r) => (
          <ReviewCard key={r.customerName} review={r} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
