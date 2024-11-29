const education = [
  {
    name: "Diploma",
    year: "(2023 - 2025)",
    institute:
      "Governor Sindh IT Initiative, Diploma in GenAI, Web3, and Metaverse",
  },
  { name: "Intermediate", year: "(2022 - 2024)", institute: "Zubaida College" },
  {
    name: "Matriculation",
    year: "(2022 - 2024)",
    institute: "St. Mary's Convent Girls Higher Secondary School",
  },
];

// Skills Data Array
const skills = [
  { name: "Typescript", percentage: 70, maxWidth: "350px" },
  { name: "CSS", percentage: 85, maxWidth: "400px" },
  { name: "HTML", percentage: 85, maxWidth: "400px" },
  { name: "Next.JS", percentage: 35, maxWidth: "150px" },
  { name: "Tailwind CSS", percentage: 70, maxWidth: "350px" },
  { name: "User Interface", percentage: 80, maxWidth: "400px" },
];

const page = () => {
  return (
    <section className="padding bg-custom-dark-gradient">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl max-md:text-3xl lg:text-4xl font-bold font-sans text-white ">
          More <span className="text-blue"> About </span> Me
        </h1>
      </div>

      {/* Education */}
      <div className="padding-x py-4 flex justify-between items-center max-lg:flex-col max-lg:justify-center w-full lg:gap-5 lg:max-container">
        <div className="w-full max-w-[500px] text-left max-md:mt-8">
          <h2 className="text-white font-sans text-2xl md:text-3xl font-medium ">
            My Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mt-4">
              <p className="text-darkergray font-sans text-sm">{edu.year}</p>
              <h4 className="text-blue font-sans text-lg font-semibold">
                {edu.name}
              </h4>
              <p className="text-lightGray font-sans text-wrap">
                {edu.institute}
              </p>
            </div>
          ))}
        </div>
          {/* Skills */}
        <div className="mt-4 w-full max-w-[500px] max-md:mt-8">
          <h2 className="text-white font-sans text-2xl md:text-3xl font-medium">
            My Skills
          </h2>
          <div className="w-full flex flex-col gap-2 mt-4">
            {skills.map((skill, index) => (
              <div key={index} className="w-full flex flex-col gap-2 mt-4">
                {/* Skills Header */}
                <div className="flex max-md:w-[300px] max-sm:w-[250px] justify-between items-center">
                  <p className="font-medium text-darkergray font-sans text-sm">
                    {skill.name}
                  </p>
                  <p className="text-end font-medium text-darkergray font-sans text-sm">
                    {skill.percentage}%
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-[700px] max-md:w-[300px] max-sm:w-[250px] bg-white rounded-none">
                  <div
                    className="h-[10px] bg-blue rounded-r-md w-full"
                    style={{
                      width: `calc(${skill.percentage}%)`, // Scale width according to percentage
                      maxWidth: skill.maxWidth, // Apply maxWidth for large screens
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
