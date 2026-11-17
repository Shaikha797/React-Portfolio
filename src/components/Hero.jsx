import { ArrowUpRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] overflow-hidden bg-[#10090b] px-6 py-20 text-white md:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[4px] text-red-500">
            <Sparkles size={17} />
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hello, I'm
            <span className="mt-2 block text-red-500">
              Ayisha Shaikha
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
            Creative Developer
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-gray-400">
            I create beautiful, responsive and user-friendly websites.
            I love turning creative ideas into meaningful digital
            experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-700"
            >
              View My Work <ArrowUpRight size={19} />
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-full border border-red-500 px-7 py-3 font-semibold transition hover:bg-red-500"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-red-600/20 blur-[90px] md:h-96 md:w-96"></div>

          <div className="relative h-[400px] w-[300px] overflow-hidden rounded-t-full border-2 border-red-500/40 bg-gradient-to-b from-red-900 to-[#1b0b10] shadow-2xl shadow-red-900/30 md:h-[480px] md:w-[360px]">

            <img
              src="/profile.jpg"
              alt="My portrait"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Floating Card */}
          <div className="absolute -left-8 top-24 rounded-xl border border-white/10 bg-[#211418] p-4 shadow-xl md:-left-16">
            <p className="text-sm text-gray-400">Experience</p>
            <h3 className="mt-1 text-xl font-bold text-red-500">
              Creative
            </h3>
            <p className="text-xs text-gray-400">Web Development</p>
          </div>

          <div className="absolute -right-5 bottom-20 rounded-xl border border-white/10 bg-[#211418] p-4 shadow-xl">
            <p className="text-sm text-gray-400">My Focus</p>
            <h3 className="mt-1 font-bold text-white">
              Design & Code
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}