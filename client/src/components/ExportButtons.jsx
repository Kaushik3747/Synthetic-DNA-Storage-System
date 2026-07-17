import API from "../services/api";

export default function ExportButtons({ id }) {

  const download = (type) => {
    window.open(
      `${API.defaults.baseURL}/report/${type}/${id}`,
      "_blank"
    );
  };

  return (
    <div className="flex gap-4 mt-6">

      <button
        onClick={() => download("pdf")}
        className="bg-red-500 px-5 py-3 rounded-lg"
      >
        PDF
      </button>

      <button
        onClick={() => download("txt")}
        className="bg-blue-500 px-5 py-3 rounded-lg"
      >
        TXT
      </button>

    </div>
  );
}