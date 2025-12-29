import "./Login.css";
import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const submit = async () => {
    const res = await API.post("/login", form);
    localStorage.setItem("token", res.data.access_token);
    nav("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input id="login-email" className="login-input"
          placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})}/>

        <input id="login-password" className="login-input"
          type="password"
          placeholder="Password"
          onChange={e=>setForm({...form,password:e.target.value})}/>

        <button id="login-submit" className="login-button" onClick={submit}>
          Login
        </button>

        <div className="login-footer">
          <Link to="/register">Create account</Link>
        </div>
      </div>
    </div>
  );
}
