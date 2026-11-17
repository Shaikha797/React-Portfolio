import { Code2, Palette, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#160d10] px-6 py-24 text-white md:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-red-500">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            About <span className="text-red-500">Me</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <h3 className="mb-6 text-3xl font-bold">
              Turning Ideas Into Digital Experiences
            </h3>

            <p className="mb-5 leading-8 text-gray-400">
              I'm a passionate web developer who enjoys creating
              modern, attractive and responsive websites.
            </p>

            <p className="leading-8 text-gray-400">
              I enjoy learning new technologies, solving problems
              and bringing creative ideas to life through code.
              My goal is to build digital experiences that are
              both beautiful and easy to use.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-700"
            >
              Let's Connect
            </a>
          </div>

          <div className="grid gap-5">

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#211418] p-6 transition hover:border-red-500/50">
              <div className="rounded-xl bg-red-500/10 p-4 text-red-500">
                <Code2 size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold">Development</h4>
                <p className="mt-1 text-gray-400">
                  Building responsive and functional websites.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#211418] p-6 transition hover:border-red-500/50">
              <div className="rounded-xl bg-red-500/10 p-4 text-red-500">
                <Palette size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold">Creative Design</h4>
                <p className="mt-1 text-gray-400">
                  Creating clean and attractive user interfaces.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#211418] p-6 transition hover:border-red-500/50">
              <div className="rounded-xl bg-red-500/10 p-4 text-red-500">
                <Rocket size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold">Continuous Learning</h4>
                <p className="mt-1 text-gray-400">
                  Exploring new tools and improving my skills.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}