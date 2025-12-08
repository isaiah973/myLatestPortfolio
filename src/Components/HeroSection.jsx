import SlideIn from "./SlideIn";
import profile from "/Images/gif.gif";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-36 py-20">
      <SlideIn>
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold leading-tight">
            Hello, I am a{" "}
            <span className="text-indigo-600">Fullstack Developer</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            I build modern, reliable, and beautiful web applications.
          </p>

          <div className="mt-8 flex gap-6">
            <a href="/portfolio">
              <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
                Portfolio
              </button>
            </a>

            <a href="/cv.pdf" download>
              <button className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </SlideIn>

      <SlideIn delay={0.2}>
        <img
          src={profile}
          alt="profile"
          className="hidden lg:block w-80 h-80 object-cover rounded-3xl mt-10 md:mt-0 "
        />
      </SlideIn>
    </section>
  );
}
