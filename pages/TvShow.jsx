import { API_KEY, BasicUrl, TVSHOW } from "../Config/Requst";
import MovieBanner from "../Components/Layout/MovieBanner";
import MovieRowList from "../Components/Layout/MovieRowList";
import React, { useEffect, useState } from "react";
import MovieSlider from "../Components/Layout/MovieSlider";
const TvShow = () => {
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
            <MovieBanner url={TVSHOW.fetchTvShowBanner.url} media_type="tv" />
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
                        fontSize: '25px',
                        padding: '12px 10px',
                        width: "20vw"
                    }} placeholder="Search Movie ..." onChange={HandleSearch} value={Search} />
                </form>
            </div>
            <div className="mt-20"></div>
            {Search ? <MovieRowList url={`${BasicUrl}/search/tv?api_key=${API_KEY}&query=${Search}&region=US&language=EN`} title="Search Similar" media_type="tv" />
                : <>
                    <MovieSlider url={TVSHOW.fetchTreadingTvShow.url} title={TVSHOW.fetchTreadingTvShow.Title} media_type="tv" />
                    <MovieRowList url={TVSHOW.fetchTopRatedTvShow.url} title={TVSHOW.fetchTopRatedTvShow.Title} media_type="tv" />
                </>
            }
        </>
    );
}

export default TvShow;