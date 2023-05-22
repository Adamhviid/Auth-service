import { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./FormTemplate.css";

import { useAuth } from "../../contexts/AuthContext";

export default function FormTemplate(props) {
  const navigate = useNavigate();
  const { title, type } = props;
  const { currentUser, register, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      switch (type) {
        case "login":
          login(email, password);
          navigate("/profile");
          break;

        case "register":
          register(email, password);
          navigate("/");
          break;

        default:
          throw new Error("Invalid type");
      }
    } catch (e) {
      alert("Failed to register");
    }
    setLoading(false);
  }

  return (
    <div className="formTemplateContainer">
      <Typography variant="h4">{title}</Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          label={"Email..."}
          type={"email"}
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label={"Password..."}
          type={"password"}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="button">Log in</button>
      </form>

      {loading && <p>Loading...</p>}
    </div>
  );
}
