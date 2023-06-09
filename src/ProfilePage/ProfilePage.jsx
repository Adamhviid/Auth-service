import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function ProfilePage() {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser, navigate]);

  async function handleSubmit() {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      alert("Failed to logout");
    }
  }
  return (
    <div>
      Hi fabulous ✨{currentUser.email}✨! <br /> Hope you have an amazing day!
      <button
        className="button"
        style={{ backgroundColor: "red" }}
        onClick={() => handleSubmit()}
      >
        Log Out
      </button>
    </div>
  );
}

export default ProfilePage;
