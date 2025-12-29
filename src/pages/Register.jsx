import "./Register.css";
import { useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    await API.post("/register", form);
    alert("Registration successful");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>

        <input id="reg-name" className="register-input"
          placeholder="Full Name"
          onChange={e=>setForm({...form,name:e.target.value})}/>

        <input id="reg-email" className="register-input"
          placeholder="Email"
          onChange={e=>setForm({...form,email:e.target.value})}/>

        <input id="reg-password" className="register-input"
          type="password"
          placeholder="Password"
          onChange={e=>setForm({...form,password:e.target.value})}/>

        <button id="reg-submit" className="register-button">
          Register
        </button>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
