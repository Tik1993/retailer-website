interface ButtonDetail {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}
interface Props {
  label: string;
  iconURL?: string;
  buttonDetail?: ButtonDetail;
  fullfilled?: boolean;
}
const Button = ({ label, iconURL, buttonDetail, fullfilled }: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${
      buttonDetail
        ? `${buttonDetail.backgroundColor} ${buttonDetail.borderColor} ${buttonDetail.textColor}`
        : "border-coral-red  bg-coral-red  text-white"
    }
    ${fullfilled && "w-full"}
    `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
