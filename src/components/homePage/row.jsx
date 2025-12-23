import { useEffect, useState, useRef } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import "./row.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__wrapper">
        <button className="row__arrow left" onClick={scrollLeft}>
          ◀
        </button>

        <div className="row__posters" ref={rowRef}>
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <img
                  key={movie.id}
                  className="row__poster"
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.name || movie.title}
                  onClick={() => navigate(`/movie/${movie.id}`)} 
                />
              )
          )}
        </div>

        <button className="row__arrow right" onClick={scrollRight}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default Row;
