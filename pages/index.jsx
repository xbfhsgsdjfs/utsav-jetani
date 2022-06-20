import { Homemovie } from "../Config/Requst";
import MovieBanner from "../Components/Layout/MovieBanner";
import MovieRowList from "../Components/Layout/MovieRowList";
import MovieSlider from "../Components/Layout/MovieSlider";

const Home = () => {
  return (
    <>
      {/* Banner Components */}
      <MovieBanner url={Homemovie.fetchBanner.url} />
      {/* MovieRow List Components */}
      <div style={{ marginTop: "-29rem" }}></div>
      <MovieRowList url={Homemovie.fetchTreading.url} title={Homemovie.fetchTreading.Title} isLargeRow={true} />
      <MovieSlider url={Homemovie.fetchNetfilxOriginal.url} title={Homemovie.fetchNetfilxOriginal.Title} media_type="tv" />
      <MovieRowList url={Homemovie.fetchMarvelMovie.url} title={Homemovie.fetchMarvelMovie.Title} media_type="movie" />
      <MovieRowList url={Homemovie.fetchTopRated.url} title={Homemovie.fetchTopRated.Title} media_type="movie" />
      <MovieRowList url={Homemovie.fetchActionMovies.url} title={Homemovie.fetchActionMovies.Title} media_type="movie" />
      <MovieRowList url={Homemovie.fetchHorrorMovies.url} title={Homemovie.fetchHorrorMovies.Title} media_type="movie" />
      <MovieRowList url={Homemovie.fetchComedyMovies.url} title={Homemovie.fetchComedyMovies.Title} media_type="movie" />
      <MovieRowList url={Homemovie.fetchRomanceMovies.url} title={Homemovie.fetchRomanceMovies.Title} media_type="movie" />
      <MovieRowList url={Homemovie.fetchDocumentariesMovies.url} title={Homemovie.fetchDocumentariesMovies.Title} media_type="movie" />
    </>
  );
}

export default Home;
