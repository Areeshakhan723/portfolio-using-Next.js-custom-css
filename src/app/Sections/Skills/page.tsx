import { education, skills } from "@/app/constant";

const page = () => {
  return (
    <section className="padding bg-bgdarkBlue">
      {/* Education */}
      <div className="padding-x py-4 flex justify-between items-center max-lg:flex-col max-lg:justify-center w-full lg:gap-5 lg:max-container">
        <div className="w-full max-w-[500px] text-left max-md:mt-8">
          <h2 className="text-white font-sans text-2xl md:text-3xl font-medium">
            My Education
          </h2>
          <div data-aos="fade-up" data-aos-delay="200">
            {education.map(({ year, name, institute }, index) => (
              <div key={index} className="mt-11">
                <p className="text-darkergray font-sans text-sm">{year}</p>
                <h4 className="text-blue font-sans text-lg font-semibold">
                  {name}
                </h4>
                <p className="text-lightGray font-sans text-wrap">
                  {institute}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Skills */}
        <div className="mt-8 w-full max-w-[500px] max-md:mt-8">
          <h2 className="text-white font-sans text-2xl md:text-3xl font-medium">
            My Skills
          </h2>
          <div className="w-full flex flex-col gap-2 mt-4">
            <div data-aos="fade-up" data-aos-delay="200">
              {skills.map(({ name, percentage, maxWidth }, index) => (
                <div key={index} className="w-full flex flex-col gap-2 mt-3">
                  {/* Skills Header */}
                  <div className="flex max-md:w-[300px] max-sm:w-[250px] justify-between items-center">
                    <p className="font-medium text-darkergray font-sans text-sm">
                      {name}
                    </p>
                    <p className="text-end font-medium text-darkergray font-sans text-sm">
                      {percentage}%
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full max-w-[700px] max-md:w-[300px] max-sm:w-[250px] bg-white rounded-none">
                    <div
                      className="h-[10px] bg-blue rounded-r-md w-full"
                      style={{
                        width: `calc(${percentage}%)`, // Scale width according to percentage
                        maxWidth: maxWidth, // Apply maxWidth for large screens
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
