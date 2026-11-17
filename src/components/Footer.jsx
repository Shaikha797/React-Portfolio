export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#160d10] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        <h2 className="text-2xl font-bold">
          My<span className="text-red-500">Portfolio.</span>
        </h2>

        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm font-semibold text-red-500 hover:text-red-400"
        >
          Back to Top ↑
        </a>

      </div>
    </footer>
  );
}