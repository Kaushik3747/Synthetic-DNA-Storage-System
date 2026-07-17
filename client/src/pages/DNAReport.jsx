import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

import CircularProgress from "../components/CircularProgress";
import DNAStatisticsCard from "../components/DNAStatisticsCard";
import ExportButtons from "../components/ExportButtons";

export default function DNAReport() {

  const { id } = useParams();

  const [report, setReport] = useState(null);

  useEffect(() => {

    API.get(`/report/${id}`)

      .then((res) => setReport(res.data))

      .catch(console.log);

  }, []);

  if (!report)
    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );

  const a = report.analytics;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl text-cyan-400 mb-10">

        DNA Report

      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <CircularProgress
          title="GC"
          value={a.gcContent}
        />

        <CircularProgress
          title="AT"
          value={a.atContent}
          color="#22c55e"
        />

        <CircularProgress
          title="Quality"
          value={a.qualityScore}
          color="#eab308"
        />

        <CircularProgress
          title="Integrity"
          value={a.integrity ? 100 : 0}
          color="#ef4444"
        />

      </div>

      <DNAStatisticsCard analytics={a} />

      <ExportButtons id={id} />

    </div>
  );
}