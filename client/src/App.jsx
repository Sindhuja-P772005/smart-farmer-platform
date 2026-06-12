import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LanguagePage from "./pages/LanguagePage";
import GuidePage from "./pages/GuidePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LanguagePage />}
        />

        <Route
          path="/guide"
          element={<GuidePage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;