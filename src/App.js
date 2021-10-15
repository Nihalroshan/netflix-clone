import "./App.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RowPoster from "./components/RowPoster/RowPoster";
import { topRatedMovies, popularTvShows } from "./urls";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPoster title="Popular Tv Shows" url={popularTvShows} poster />
      <RowPoster title="Top Rated Movies" url={topRatedMovies} poster />
    </>
  );
}

export default App;
