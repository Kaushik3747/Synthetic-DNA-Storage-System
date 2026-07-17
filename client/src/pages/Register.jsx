import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
  console.log("Full Error:", err);
  console.log("Response:", err.response);
  console.log("Data:", err.response?.data);
  console.log("Message:", err.message);

  alert(err.response?.data?.message || err.message);
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 rounded bg-slate-800 text-white mb-4"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-slate-800 text-white mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-slate-800 text-white mb-6"
          onChange={handleChange}
        />

        <button
          className="w-full bg-cyan-500 py-3 rounded-lg"
        >
          Register
        </button>

        <p className="mt-5 text-gray-400">
          Already have an account?{" "}
          <Link className="text-cyan-400" to="/login">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}