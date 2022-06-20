import axios from "axios";
import { useEffect, useState } from "react";
import CastRow from "../../Components/Layout/Cast";
import Player from "../../Components/Layout/Player";
import DetailsData from "../../Components/Layout/Details";
import { API_KEY, BasicUrl, IMGPATH, unavailableLandscape } from "../../Config/Requst";
import MovieRowList from "../../Components/Layout/MovieRowList";

const TvShowDetails = ({ DetailsDatas, id, Cast }) => {
    const [Episodes, Setepisodes] = useState([])
    const [Seasons, setSeasonsId] = useState(1)
    const [EpisodesID, SetepisodesId] = useState(1)
    const [EpisodesVideoData, SetEpisodesVideoData] = useState([])
    useEffect(async () => {
        const request = await axios.get(`${BasicUrl}/tv/${id}/season/${Seasons}?api_key=${API_KEY}&language=en-US`);
        Setepisodes(request.data.episodes)
        const EpisodesVideo = await axios.get(`${BasicUrl}/tv/${id}/season/${Seasons}/episode/${EpisodesID}/videos?api_key=${API_KEY}&language=en-US`);
        SetEpisodesVideoData(EpisodesVideo.data.results);
        return request
    }, [Seasons, EpisodesID])
    return (
        <>
            <header
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${DetailsDatas.backdrop_path ? IMGPATH + "/" + DetailsDatas.backdrop_path : unavailableLandscape})`,
                    color: "#CCC",
                    height: "100vh",
                    marginTop: "-180px"
                }}>
                <DetailsData DetailsData={DetailsDatas} genres={DetailsDatas.genres} number={150} />
                <CastRow CastData={Cast.cast} />
                <div className="fadeBottom "></div>
                <div className="-mt-64">
                    <Player VideoData={EpisodesVideoData} id={DetailsDatas.id} media_type="tv" />
                    <MovieRowList url={`${BasicUrl}/tv/${id}/similar?api_key=${API_KEY}&language=en-US`} title="similar" media_type="tv" />
                </div>
            </header>
        </>
    );
}

export default TvShowDetails;

export async function getServerSideProps(context) {
    const CastRow = await fetch(`${BasicUrl}/tv/${context.query.TvShowDetails}/credits?api_key=${API_KEY}`).then((res) => res.json());
    const Details = await fetch(`https://api.themoviedb.org/3/tv/${context.query.TvShowDetails}?api_key=${API_KEY}`).then((res) => res.json());
    return {
        props: {
            DetailsDatas: Details,
            Cast: CastRow,
            id: context.query.TvShowDetails
        }
    }
}