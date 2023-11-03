import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h2 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold max-lg:text-center">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h2>
      <div className="lg:max-w-[40%] w-full flex  max-sm:flex-col items-center gap-5 p-2.5 sm:border sm:border-slate-grey sm:rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
