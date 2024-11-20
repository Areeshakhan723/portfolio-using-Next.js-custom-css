import Image from "next/image";
import { socialMedia } from "@/app/constant";
import Buttons from "@/app/Component/Buttons";

const page = () => {
  return (
    <section className="padding bg-custom-dark-gradient">
      <div className="max-container">
        <h1 className="capitalize text-3xl md:text-4xl font-bold font-sans text-center text-blue">
          Contact
          <span className="text-white"> Me</span>
        </h1>

        <div className="padding-x mt-10 flex justify-between max-lg:justify-center max-lg:items-center flex-row max-lg:flex-col gap-5 max-lg:gap-10">
          <div className="flex flex-col gap-2 max-md:gap-2">
            <h1 className="text-2xl md:text-3xl text-lightGray font-bold font-sans ">
              Connect with me:
            </h1>
            <p className="text-lightGray  text-base">
              Satisfied with me? Please contact me
            </p>
            <div className="flex justify-center lg:justify-start items-start  gap-4 max-sm:gap-2 mt-3">
              {socialMedia.map((icons) => (
                <div
                  className="flex justify-center items-center rounded-full w-12 h-12 bg-white"
                  key={icons.alt}
                >
                  <a
                    href={icons.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center rounded-full w-12 h-12 bg-white transition duration-300 hover:scale-125"
                  >
                    <Image
                      src={icons.src}
                      alt={icons.alt}
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end items-end flex-col">
            <div className="w-full flex justify-start items-start flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="text-white w-[500px] max-md:w-[250px] max-sm:w-[230px] h-[30px] bg-transparent border border-darkblue p-5 rounded-2xl placeholder-lightGray"
              />
              <input
                type="email"
                placeholder="Email"
                className="text-white w-[500px] max-md:w-[250px] max-sm:w-[230px] h-[30px] bg-transparent border border-darkblue p-5 rounded-2xl placeholder-lightGray"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="text-white w-[500px] max-md:w-[250px] max-sm:w-[230px] h-[30px] bg-transparent border border-darkblue p-5 rounded-2xl placeholder-lightGray"
              />
              <textarea
                placeholder="Message"
                className="text-white w-[500px] max-md:w-[250px] max-sm:w-[230px] h-[150px] bg-transparent border border-darkblue p-5 rounded-2xl placeholder-lightGray"
              />
              <div className="flex justify-start items-start">
                <Buttons label="Send Message" backgroundColor="bg-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
