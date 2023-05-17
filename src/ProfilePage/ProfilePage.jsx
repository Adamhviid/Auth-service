import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

import { useAuth } from "../contexts/AuthContext";

function ProfilePage() {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();

  async function handleSubmit() {
    try {
      await logout();
      navigate("/login");
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
