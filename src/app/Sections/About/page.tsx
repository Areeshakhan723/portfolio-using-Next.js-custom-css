"use client";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  return (
    <section
      className={`${
        pathname === "/Sections/About" ? "h-screen" : "h-auto"
      } bg-bgdarkBlue p-4 mx-auto padding `}
    >
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col justify-center md:flex-col md:flex-wrap">
          <h1 className="text-3xl md:text-4xl font-bold font-sans text-center text-white">
            <span className="text-blue"> About</span> Me
          </h1>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="mt-10 text-center text-lg sm:w-full md:w-4/5 lg:w-[800px] font-sans text-lightGray">
              Hi, I’m Areesha Khan, a passionate developer with a strong
              foundation in frontend development and UI/UX design. Over time,
              I’ve worked on multiple projects, refining my skills and bringing
              creative ideas to life. and UI UX designning <br />
              Now, I’m expanding my expertise by exploring backend technologies,
              aiming to build more dynamic and robust web applications. My
              journey is all about learning, growing, and turning ideas into
              reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
