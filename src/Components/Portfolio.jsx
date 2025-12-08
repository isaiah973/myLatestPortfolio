import SlideIn from "./SlideIn";

export default function Portfolio() {
  const projects = [
    {
      title: "Ecommerce Store",
      link: "https://your-ecommerce-demo.com",
    },
    {
      title: "Portfolio Website",
      link: "https://your-portfolio-demo.com",
    },
    {
      title: "UI Landing Page",
      link: "https://your-landing-demo.com",
    },
  ];

  return (
    <section className="w-full px-10 md:px-20 py-20 bg-gray-50">
      <SlideIn>
        <h2 className="text-4xl font-bold text-center mb-10">My Work</h2>
      </SlideIn>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <SlideIn key={i} delay={i * 0.15}>
            <a
              href={p.link}
              target="_blank"
              className="block p-6 bg-white shadow rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-3">Click to view project →</p>
            </a>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
