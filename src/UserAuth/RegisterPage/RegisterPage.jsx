import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import FormTemplate from "../FormTemplate/FormTemplate";

export default function RegisterPage() {
  return (
    <div>
      <FormTemplate title="Create Account" type="register" />
      <div className="registerDiv">
        <Typography gutterBottom>
          Already have an account??
          <br />
          <Link to="/login" key={"Login"}>
            Login here
          </Link>
        </Typography>
      </div>
    </div>
  );
}
