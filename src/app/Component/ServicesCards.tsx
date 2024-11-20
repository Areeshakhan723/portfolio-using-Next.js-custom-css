import Image, { StaticImageData } from "next/image";

const ServicesCards = ({
  imgURL,
  name,
}: {
  imgURL: string | StaticImageData;
  name: string;
}) => {
  return (
    <div>
      {/* card */}
      <div className="relative h-auto mt-3 w-full pt-2">
        {/* Background Layer */}
        <div className="absolute inset-0 rounded-3xl bg-blue opacity-10  md:opacity-20"></div>
        {/* content layer */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col">
            <h3 className="text-white text-left text-2xl md:text-xl lg:text-2xl font-sans p p-5">
              {name}
            </h3>
            <div className="h-[2px] w-auto bg-darkergray m-5" />
            <Image
              src={imgURL}
              alt="Services Cards"
              width={300}
              // height={307}
              className="object-contain w-full max-w-[300px]  pt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
