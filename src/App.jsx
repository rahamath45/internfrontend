import {  Routes, Route, Link,} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import CreateTemplate from "./pages/CreateTemplate";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // When login/register occurs, update state
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
      <>
      <header className="px-6 py-4 bg-white shadow flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Template Gallery</h1>

        <nav className="flex gap-4 text-gray-700 items-center">
          <Link to="/">Templates</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/create" className="bg-green-600 text-white px-3 py-1 rounded">
   Create
</Link>


          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="bg-blue-500 text-white px-3 py-1 rounded">
                Login
              </Link>
              <Link to="/register" className="bg-gray-700 text-white px-3 py-1 rounded">
                Register
              </Link>
            </>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
         <Route
  path="/favorites"
  element={
    <PrivateRoute>
      <Favorites />
    </PrivateRoute>
  }
/>

        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
<Route
  path="/create"
  element={
    <PrivateRoute>
      <CreateTemplate />
    </PrivateRoute>
  }
/>
      </Routes>
  </>
  );
}
