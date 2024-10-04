// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IndividualContext } from "../Individual/IndividualProvider";

// const LoginPage = () => {
//   const { login, error, user } = useContext(IndividualContext);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(username, password);
//     if (user) {
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       {error && <p className="text-[#EA4E4B]">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IndividualContext } from "../Individual/IndividualProvider";

const LoginPage = () => {
  const { login, error, user } = useContext(IndividualContext);
  const [username, setUsername] = useState("kminchelle"); // Default username
  const [password, setPassword] = useState("0lelplR"); // Default password
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    if (user) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Login
        </h1>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Username</label>
            <input
              type="text"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-500 text-center mt-4">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
