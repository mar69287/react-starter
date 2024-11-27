import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utilities/PrivateRoutes";
import Navigation from "./components/Navigation";
import { Dashboard, Home } from "./pages/";

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
