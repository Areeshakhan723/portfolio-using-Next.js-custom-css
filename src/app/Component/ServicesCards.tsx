import Image, { StaticImageData } from "next/image";

const ServicesCards = ({
  imgURL,
  name,
  description,
}: {
  imgURL: string | StaticImageData;
  name: string;
  description: string;
}) => {
  return (
    <div>
      {/* card */}
      <div className="relative h-auto mt-3 w-full pt-2">
        {/* Background Layer */}
        <div className="absolute inset-0 rounded-3xl bg-blue opacity-10 md:opacity-20"></div>
        {/* content layer */}
        <div className="relative z-10 w-full p-4">
          <div className="flex flex-col justify-center items-center">
            <Image src={imgURL} alt="icons" width={30} height={30} />

            <h4 className="text-white font-semibold text-2xl md:text-xl font-sans p-3">
              {name}
            </h4>
            <div className="w-[300px] flex justify-center items-center h-[100px] p-4">
              <p className="text-lightGray font-medium">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
