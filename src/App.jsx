import { Container } from "@mui/system";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";

import LoginPage from "./UserAuth/LoginPage";
import RegisterPage from "./UserAuth/RegisterPage";
import ProfilePage from "./ProfilePage/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <div className="Main">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
