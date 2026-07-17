import {
  FaDna,
  FaDatabase,
  FaLock,
  FaBolt,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaDna />,
      title: "DNA Encoding",
      description: "Convert digital files into DNA sequences.",
    },
    {
      icon: <FaDatabase />,
      title: "Cloud Storage",
      description: "Store encoded DNA securely in MongoDB.",
    },
    {
      icon: <FaLock />,
      title: "Secure Access",
      description: "JWT-based authentication and authorization.",
    },
    {
      icon: <FaBolt />,
      title: "Fast Retrieval",
      description: "Decode DNA back into the original digital data.",
    },
  ];

  return (
    <section className="bg-slate-900 py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 border border-cyan-700 hover:border-cyan-400 transition"
          >
            <div className="text-5xl text-cyan-400 mb-4">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}