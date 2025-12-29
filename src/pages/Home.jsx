import "./Home.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../api";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/me").then(res => setUser(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 id="welcome-message" className="home-title">
          Welcome back, {user?.name} 👋
        </h1>
      </div>
    </>
  );
}
