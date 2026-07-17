import { FaChartLine, FaDatabase, FaFileAlt } from "react-icons/fa";

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-slate-950">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Dashboard Preview
      </h2>

      <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl border border-cyan-800 p-10 shadow-2xl">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-xl p-6">
            <FaDatabase className="text-4xl text-cyan-400"/>
            <h3 className="mt-4 text-3xl font-bold">128 GB</h3>
            <p className="text-gray-400 mt-2">Encoded Data</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <FaFileAlt className="text-4xl text-cyan-400"/>
            <h3 className="mt-4 text-3xl font-bold">247</h3>
            <p className="text-gray-400 mt-2">Stored Files</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <FaChartLine className="text-4xl text-cyan-400"/>
            <h3 className="mt-4 text-3xl font-bold">99.98%</h3>
            <p className="text-gray-400 mt-2">Encoding Accuracy</p>
          </div>

        </div>

      </div>

    </section>
  );
}