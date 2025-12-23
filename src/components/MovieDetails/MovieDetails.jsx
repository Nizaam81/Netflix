import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../axios";
import Row from "../homePage/row";
import "./MovieDetails.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchMovie() {
            try {
                setLoading(true);
                const response = await axios.get(
                    `/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
                );
                setMovie(response.data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchMovie();
    }, [id]);

    
    if (loading) {
        return (
            <div style={{ color: "white", padding: "100px", textAlign: "center" }}>
                Loading movie details...
            </div>
        );
    }

    
    if (error || !movie) {
        return (
            <div style={{ color: "white", padding: "100px", textAlign: "center" }}>
                Movie details not available
            </div>
        );
    }

    return (
        <>
            <div className="movieDetails">
                <div className="movieDetails__left">
                    <img
                        src={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                                : "/no-poster.png"
                        }
                        alt={movie.title}
                    />

                    <button
                        className="playButton"
                        onClick={() => navigate(`/watch/${id}`)}
                    >
                        ▶
                    </button>
                </div>

                <div className="movieDetails__right">
                    <h1>{movie.title}</h1>

                    <div className="movieMeta">
                        <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
                        <span>{movie.runtime || "?"} min</span>
                        <span className="rating">⭐ {movie.vote_average || "N/A"}</span>
                    </div>

                    <p className="overview">
                        {movie.overview || "No description available."}
                    </p>

                    <div className="movieExtra">
                        <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(", ") || "N/A"}</p>
                        <p><strong>Language:</strong> {movie.original_language?.toUpperCase()}</p>
                        <p><strong>Status:</strong> {movie.status}</p>
                    </div>
                </div>
            </div>

            <Row
                title={`More Like ${movie.title}`}
                fetchUrl={`/movie/${id}/similar?api_key=${import.meta.env.VITE_TMDB_API_KEY}`}
            />
        </>
    );
}

export default MovieDetails;
