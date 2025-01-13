import ServicesCards from "@/app/Component/ServicesCards";
import { services } from "../../constant/index";
const page = () => {
  return (
    <section className="padding bg-custom-gradient">
      <div className="w-full flex justify-center items-center flex-col ">
        <h1 className="text-2xl max-md:text-3xl lg:text-4xl font-bold font-sans text-center text-blue">
          Services
        </h1>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 ">
            {services.map((cards) => (
              <ServicesCards key={cards.name} {...cards} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
