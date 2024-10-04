import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IndividualContext } from "../Individual/IndividualProvider";

const LoginPage = () => {
  const { login, error, user } = useContext(IndividualContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    if (user) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#DAE9D0]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-[#515251] mb-4">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-[#515251] font-medium mb-1">Username</label>
            <input
              type="text"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#515251] font-medium mb-1">Password</label>
            <input
              type="password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-center mb-2 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#11453B] text-white py-2 rounded-lg hover:bg-[#DAE9D0] hover:text-[#515251] transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-[#515251] text-center mt-4">
          Don't have an account?{" "}
          <span className="text-[#EA4E4B] cursor-pointer"> Register</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
