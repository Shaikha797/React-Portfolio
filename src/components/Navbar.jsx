import { Menu } from "lucide-react";

export default function Navbar() {
return (
<nav className="w-full bg-[#10090b] px-6 py-5 text-white md:px-16">
<div className="mx-auto flex max-w-7xl items-center justify-between">
<a href="#" className="text-2xl font-bold tracking-wide">
Portfolio<span className="text-red-500">.</span>
</a>

    <div className="hidden items-center gap-10 md:flex">
      <a href="#home" className="transition hover:text-red-500">Home</a>
      <a href="#about" className="transition hover:text-red-500">About</a>
      <a href="#services" className="transition hover:text-red-500">Services</a>
      <a href="#projects" className="transition hover:text-red-500">Projects</a>
      <a href="#contact" className="transition hover:text-red-500">Contact</a>
    </div>

    <a
      href="#contact"
      className="hidden rounded-full bg-red-600 px-6 py-2.5 font-medium transition hover:bg-red-700 md:block"
    >
      Let's Talk
    </a>

    <button className="text-white md:hidden" aria-label="Open menu">
      <Menu size={27} />
    </button>
  </div>
</nav>

);
}