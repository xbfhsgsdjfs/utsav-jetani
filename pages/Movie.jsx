import { API_KEY, BasicUrl, Movies } from "../config/Requst";
import MovieBanner from "../components/layout/MovieBanner";
import MovieRowList from "../components/layout/MovieRowList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieSlider from "../Components/Layout/MovieSlider";
const Movie = () => {
    const [Search, setSearch] = useState("");
    const [Poster, setPoster] = useState([]);
    function HandleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value)
        console.log(e.target.value);
    }
    return (
        <>
            {/* Banner Components */}
            <MovieBanner url={Movies.fetchMovieBanner.url} media_type="movie" />
            {/* MovieRow List Components */}
            <div style={{ marginTop: "-29rem" }}></div>
            <div>
                <form style={{
                    position: "absolute",
                    right: "10px"
                }}>
                    <input type="text" style={{
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "3px solid red",
                        color: "red",
                        boxSizing: "border-box",
                        fontFamily: 'Arvo',
                        fontSize: '20px',
                        padding: '12px 10px',
                        width: "20vw"
                    }} placeholder="Search Movie ..." onChange={HandleSearch} value={Search} />
                </form>
            </div>
            <div className="mt-20"></div>
            {Search ? <MovieRowList url={`${BasicUrl}/search/movie?api_key=${API_KEY}&query=${Search}&region=US&language=EN`} title="Search Similar" media_type="movie" />
                : <>
                    <MovieRowList url={Movies.fetchUpComingMovie.url} title={Movies.fetchUpComingMovie.Title} media_type="movie" />
                    <MovieSlider url={Movies.fetchTreadingMovie.url} title={Movies.fetchTreadingMovie.Title} media_type="movie" />
                    <MovieRowList url={Movies.fetchTopRatedMovie.url} title={Movies.fetchTopRatedMovie.Title} media_type="movie" />
                </>
            }

        </>
    );
}

export default Movie;