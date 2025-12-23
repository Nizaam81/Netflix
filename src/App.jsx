import { Routes, Route } from "react-router-dom";

import Login from "./components/login";
import HomePage from "./components/homePage/homePage";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NetflixPlayer from "./components/NetflixPlayer/NetflixPlayer";
import ProtectedRoute from "../src/components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route
        path="/"
        element={
          <>
            <Login />
            <Footer />
          </>
        }
      />

      {/* PROTECTED */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          </ProtectedRoute>
        }
      />

      <Route
        path="/movie/:id"
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <MovieDetails />
              <Footer />
            </>
          </ProtectedRoute>
        }
      />

      <Route
        path="/watch/:id"
        element={
          <ProtectedRoute>
            <NetflixPlayer />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
