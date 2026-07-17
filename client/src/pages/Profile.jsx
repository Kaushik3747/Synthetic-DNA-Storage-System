import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl w-[400px] text-center border border-cyan-500">

        <img
          src="https://ui-avatars.com/api/?name=DNA+User&background=0f172a&color=22d3ee&size=128"
          alt="Profile"
          className="mx-auto rounded-full"
        />

        <h1 className="text-3xl text-cyan-400 mt-5 font-bold">
          DNA User
        </h1>

        <p className="text-gray-400 mt-2">
          Synthetic DNA Storage System
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg text-white font-bold"
        >
          Logout
        </button>

      </div>
    </div>
  );
}