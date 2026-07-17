const steps = [
  {
    title: "Upload",
    desc: "Upload text or files."
  },
  {
    title: "Encode",
    desc: "Convert binary data into DNA sequences."
  },
  {
    title: "Store",
    desc: "Store encoded DNA in MongoDB."
  },
  {
    title: "Decode",
    desc: "Retrieve and decode back to digital data."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        How It Works
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-8 border border-cyan-800"
          >

            <div className="text-5xl font-bold text-cyan-400">
              {index + 1}
            </div>

            <h3 className="text-2xl mt-6">
              {step.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {step.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}