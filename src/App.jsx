import { Routes, Route } from "react-router-dom";

import Login from "./components/login";
import HomePage from "./components/homePage/homePage";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NetflixPlayer from "../src/components/NetflixPlayer/NetflixPlayer";


function App() {
  return (
    <Routes>
      <Route path="/" element={
        
        <>
          <Login />
          <Footer/>
        </>} />

      <Route
        path="/home"
        element={
          <>
            
            <Navbar />
            <HomePage />
            <Footer />
          </>
        }
      />

      <Route
        path="/movie/:id"
        element={
          <>
            <Navbar />
            <MovieDetails />
            <Footer />
          </>
        }
      />

     
      <Route
        path="/watch/:id"
        element={<NetflixPlayer />}
      />
    </Routes>
  );
}

export default App;
