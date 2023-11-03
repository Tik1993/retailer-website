import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [shownShoeImage, setShownShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-[72px] leading-[82px] sm:text-8xl font-bold">
          <span className="relative z-10 pr-1 xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>{" "}
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center py-40 xl:py-0 xl:min-h-screen bg-primary bg-hero bg-cover bg-center">
        <img
          src={shownShoeImage}
          alt="shoe collection"
          width={640}
          height={500}
          className="object-contain relative z-10  "
        />
        <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%]">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                thumbnail={shoe.thumbnail}
                bigShoe={shoe.bigShoe}
                shownShoeImage={shownShoeImage}
                changeShownShoeImage={(img) => setShownShoeImage(img)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
