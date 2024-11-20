import Image from "next/image";

const Buttons = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
}: {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center px-3 py-2 font-sans border-2 border-darkblue text-white rounded-2xl
            ${backgroundColor || "bg-blue"}
            ${borderColor || "border-transparent"} 
            `}
      >
        {label}

        {iconURL && (
          <Image
            src={iconURL}
            alt="icon"
            width={25}
            height={25}
            className="ml-2 hover:animate-bounce"
          />
        )}
      </button>
    </>
  );
};

export default Buttons;
