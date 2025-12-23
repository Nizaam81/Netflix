import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../axios";
import "./NetflixPlayer.css";

function NetflixPlayer() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTrailer() {
            try {
                const res = await axios.get(
                    `/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
                );

                const trailer = res.data.results.find(
                    (vid) => vid.site === "YouTube" && vid.type === "Trailer"
                );

                setTrailerKey(trailer?.key || null);
            } catch (err) {
                console.error(err);
                setTrailerKey(null);
            } finally {
                setLoading(false);
            }
        }

        fetchTrailer();
    }, [id]);

 
    if (loading) {
        return (
            <div className="player" style={{ color: "white", textAlign: "center" }}>
                Loading trailer...
            </div>
        );
    }


    if (!trailerKey) {
        return (
            <div className="player">
                <button className="backBtn" onClick={() => navigate(-1)}>←</button>
                <h2 style={{ color: "white", textAlign: "center", marginTop: "40vh" }}>
                    Trailer not available
                </h2>
            </div>
        );
    }

    return (
        <div className="player">
            <button className="backBtn" onClick={() => navigate(-1)}>←</button>

            <iframe
                className="video"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Trailer"
            />
        </div>
    );
}

export default NetflixPlayer;
