import {
  Code2,
  Palette,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Web Development",
    description:
      "Building modern, responsive and high-performance websites using the latest web technologies.",
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    description:
      "Designing clean, attractive and user-friendly interfaces that create great user experiences.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Responsive Design",
    description:
      "Creating websites that look beautiful and work smoothly on desktops, tablets and mobile devices.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#10090b] px-6 py-24 text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-red-500">
            What I Offer
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-red-500">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            I provide creative and professional digital solutions
            to help bring your ideas to life.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-[#1b1115] p-8 transition duration-300 hover:-translate-y-3 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-900/20"
            >
              <div className="mb-7 inline-flex rounded-xl bg-red-500/10 p-4 text-red-500 transition group-hover:bg-red-600 group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mb-8 leading-7 text-gray-400">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-red-500 transition hover:text-red-400"
              >
                Learn More
                <ArrowUpRight size={18} />
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}