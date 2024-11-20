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
          <div className="mt-4">
            <p className="text-darkergray font-sans text-sm">(2023 - 2025)</p>
            <h4 className="text-blue font-sans text-lg font-semibold">
              Diploma
            </h4>
            <p className="text-lightGray font-sans text-wrap">
              Governor Sindh IT Initiative, Diploma in GenAI, Web3, and
              Metaverse
            </p>
            <p className="text-darkergray font-sans text-sm mt-7">
              (2022 - 2024)
            </p>
            <h4 className="text-blue font-sans text-lg font-semibold">
              Intermediate
            </h4>
            <p className="text-lightGray font-sans">Zubaida College</p>
            <p className="text-darkergray font-sans text-sm mt-7">
              (2012 - 2021)
            </p>
            <h4 className="text-blue font-sans text-lg font-semibold">
              Matriculation
            </h4>
            <p className="text-lightGray font-sans">
              {` St. Mary's Convent Girls Higher Secondary School`}
            </p>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-10 w-full max-w-[500px] max-md:mt-8">
          <h2 className="text-white font-sans text-2xl md:text-3xl font-medium">
            My Skills
          </h2>
          <div className="w-full flex flex-col gap-2 mt-4">
            <div className="flex max-md:w-[300px]  max-sm:w-[250px]  justify-between items-center">
              <p className="text-[18px] font-medium text-darkergray font-sans text-sm">
                Typescript
              </p>
              <p className="text-[18px] text-end font-medium text-darkergray font-sans text-sm">
                70%
              </p>
            </div>
            {/* scale line */}
            <div className="w-full max-w-[700px] max-md:w-[300px] max-sm:w-[250px] bg-white rounded-none">
              <div className="h-[10px] bg-blue max-w-[350px] max-md:w-[230px] max-sm:w-[200px] rounded-r-md" />
            </div>
          </div>
          <div className="w-full  flex flex-col gap-2 mt-4">
            <div className="flex max-md:w-[300px] max-sm:w-[250px]  justify-between items-center">
              <p className="text-[18px] font-medium text-darkergray font-sans text-sm">
                CSS
              </p>
              <p className="text-[18px] text-end font-medium text-darkergray font-sans text-sm">
                85%
              </p>
            </div>

            <div className="w-full max-w-[700px] max-md:w-[300px] bg-white max-sm:w-[250px] rounded-none">
              <div className="h-[10px] bg-blue max-w-[400px]   max-sm:w-[220px] max-md:w-[250px] rounded-r-md" />
            </div>
          </div>
          <div className="w-full  flex flex-col gap-2 mt-4">
            <div className="flex max-md:w-[300px] max-sm:w-[250px] justify-between items-center">
              <p className="text-[18px] font-medium text-darkergray font-sans text-sm">
                HTML
              </p>
              <p className="text-[18px] text-end font-medium text-darkergray font-sans text-sm">
                85%
              </p>
            </div>

            <div className="w-full max-w-[700px] max-md:w-[300px] max-sm:w-[250px] bg-white rounded-none">
              <div className="h-[10px] bg-blue max-w-[400px] max-md:w-[250px]  max-sm:w-[220px] rounded-r-md" />
            </div>
          </div>
          <div className="w-full  flex flex-col gap-2 mt-4">
            <div className="flex max-md:w-[300px] max-sm:w-[250px]  justify-between items-center">
              <p className="text-[18px] font-medium text-darkergray font-sans text-sm">
                Next.JS
              </p>
              <p className="text-[18px] text-end font-medium text-darkergray font-sans text-sm">
                35%
              </p>
            </div>

            <div className="w-full max-w-[700px] max-md:w-[300px] max-sm:w-[250px] bg-white rounded-none">
              <div className="h-[10px] bg-blue max-w-[150px] max-md:w-[150px]  max-sm:w-[120px] rounded-r-md" />
            </div>
          </div>
          <div className="w-full  flex flex-col gap-2 mt-4">
            <div className="flex max-md:w-[300px] max-sm:w-[250px]  justify-between items-center">
              <p className="text-[18px] font-medium text-darkergray font-sans text-sm">
                Tailwind CSS
              </p>
              <p className="text-[18px] text-end font-medium text-darkergray font-sans text-sm">
                70%
              </p>
            </div>

            <div className="w-full max-w-[700px] max-md:w-[300px] max-sm:w-[250px] bg-white rounded-none">
              <div className="h-[10px] bg-blue max-w-[350px] max-md:w-[230px]  max-sm:w-[200px] rounded-r-md" />
            </div>
          </div>
          <div className="w-full  flex flex-col gap-2 mt-4">
            <div className="flex max-md:w-[300px] max-sm:w-[250px]  justify-between items-center">
              <p className="text-[18px] font-medium text-darkergray font-sans text-sm">
                User Interface
              </p>
              <p className="text-[18px] text-end font-medium text-darkergray font-sans text-sm">
                80%
              </p>
            </div>
            <div className="w-full max-w-[700px] max-md:w-[300px] max-sm:w-[250px] bg-white rounded-none">
              <div className="h-[10px] bg-blue max-w-[400px] max-md:w-[240px]  max-sm:w-[210px] rounded-r-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
