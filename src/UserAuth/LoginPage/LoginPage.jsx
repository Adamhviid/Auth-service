import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import FormTemplate from "../FormTemplate/FormTemplate";

export default function LoginPage() {
  return (
    <div>
      <FormTemplate title="Log in" type="login" />
      <div className="registerDiv">
        <Typography gutterBottom>
          Don't have an account yet?
          <br />
          <Link to="/register" key={"Register"}>
            Register here
          </Link>
        </Typography>
      </div>
    </div>
  );
}
