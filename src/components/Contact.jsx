import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#10090b] px-6 py-24 text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-red-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Work <span className="text-red-500">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Have a project in mind? Feel free to contact me.
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-red-500/10 p-4 text-red-500">
                <Mail size={25} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">vayishashaikha@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-red-500/10 p-4 text-red-500">
                <Phone size={25} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+91 75948 18562</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-xl bg-red-500/10 p-4 text-red-500">
                <MapPin size={25} />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">India</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-[#211418] p-4 text-white outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-[#211418] p-4 text-white outline-none focus:border-red-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-white/10 bg-[#211418] p-4 text-white outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
            >
              Send Message <Send size={18} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}