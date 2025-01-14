import { socialMedia } from "@/app/constant";
import Image from "next/image";
import { profile } from "../../assets/images/index";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
const page = () => {
  const resumeURL =
    "https://drive.google.com/file/d/11fWnsLadln78Hth-Uz2Vg8IqbQVKuIRS/view?usp=sharing";
  return (
    <section className="bg-custom-gradient padding">
      <div className="animate-slide-down padding-x w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:max-container">
        {/* Left Section */}
        <div className="w-full max-w-[500px] text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-blue font-bold leading-normal">
            {`I'm Areesha Khan`}
          </h1>
          <p className="text-[20px] mt-5 text-lightGray font-normal leading-normal max-lg:leading-[40px]">
            A Frontend Developer and UI Designer, Building Responsive and
            User-Centric Interfaces
          </p>
          <div className="flex flex-col max-sm:flex-col justify-start items-start gap-6 mt-10">
            <div className="flex justify-center lg:justify-start items-start  gap-3 max-sm:gap-2">
              {socialMedia.map((icons) => (
                <div
                  className="flex justify-center items-center rounded-full w-12 h-12 bg-white"
                  key={icons.alt}
                >
                  <Link
                    href={icons.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center rounded-full w-12 h-12 bg-white shadow shadow-blue transition duration-300 hover:scale-125"
                  >
                    <Image
                      src={icons.src}
                      alt={icons.alt}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <a href={resumeURL} target="_blank">
              <button className="flex justify-center items-center flex-row gap-3 px-5 py-2 font-sans font-semibold bg-blue text-white rounded-2xl hover:bg-darkblue transition duration-300 hover:scale-110">
                View Resume
                <ArrowDown />
              </button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="animate-slide-down flex justify-center items-center lg:justify-end lg:items-end w-full max-sm:pt-10 max-lg:pt-12">
          <Image
            src={profile}
            alt="Areesha Khan's profile picture"
            className="object-contain rounded-full  w-[300px] sm:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
