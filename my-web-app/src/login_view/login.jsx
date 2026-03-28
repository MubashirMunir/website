import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      // const response = await fetch("https://eliteerp.api.tracktheorder.com/hr/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      // });

      // const data = await response.json();

      // if (!response.ok) {
      //   alert(data.message || "Login failed");
      //   return;
      // }

      // console.log("Login success:", data);

      // localStorage.setItem("token", data.token || "");
      // localStorage.setItem("user", JSON.stringify(data.user || {}));

      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <form onSubmit={handleLogin} className="form">
        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}