import "./homePage.css";
import Row from "./row";
import requests from "../../constants/requests";

function HomePage() {
  return (
    <div className="home">
     
      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">STRANGER THINGS</h1>

          <div className="banner__buttons">
            <button className="banner__button play">▶ Play</button>
            <button className="banner__button info">More Info</button>
          </div>

          <p className="banner__description">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange
            little girl.
          </p>
        </div>
        <div className="banner--fadeBottom" />
      </header>

     
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default HomePage;
