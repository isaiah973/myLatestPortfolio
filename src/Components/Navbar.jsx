import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-10 md:px-36 flex justify-between items-center bg-white shadow">
      <h1 className="text-2xl font-bold">Adeola Isaiah</h1>

      <div className="flex gap-8 text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}
