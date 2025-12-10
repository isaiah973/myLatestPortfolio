import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" font-[poppins] w-full py-6 px-10 md:px-36 flex justify-between items-center bg-white shadow">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          Adeola <span className="text-cyan-600">Isaiah</span>
        </h1>
      </Link>

      <div className="flex gap-8 text-lg font-medium">
        <Link
          className="border-b-2 border-transparent hover:border-b-cyan-600"
          to="/"
        >
          Home
        </Link>
        <Link
          className="border-b-2 border-transparent hover:border-b-cyan-600"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="border-b-2 border-transparent hover:border-b-cyan-600"
          to="/contact"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
