import Image, { StaticImageData } from "next/image";
import React from "react";

const ProjectsCards = ({
  imgURL,
  name,
  href,
}: {
  imgURL: string | StaticImageData;
  name: string;
  href: string;
}) => {
  return (
    <div className="mt-16 flex justify-center items-center">
      <div className="w-[350px] h-[300px] lg:h-[350px] md:h-[330px] bg-white gap-4 p-4 flex pt-0 justify-center items-center flex-col shadow-md rounded-md translate transition duration-300 ease-in-out hover:scale-110">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image
            src={imgURL}
            alt={`Project image for ${name}`}
            width={300}
            height={200}
            className="w-full h-[230px] object-contain md:h-[230px] lg:h-[250px]"
          />
        </a>
        <div className="flex justify-start items-start w-full">
          <h2 className="text-darkblue text-sm md:text-lg  font-sans font-semibold break-words">
            {name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
