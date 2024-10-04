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
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="text-[#EA4E4B]">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
