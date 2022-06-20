import CastRow from "../../Components/Layout/Cast";
import Player from "../../Components/Layout/Player";
import DetailsData from "../../Components/Layout/Details";
import { API_KEY, BasicUrl, IMGPATH, unavailableLandscape } from "../../Config/Requst";
import MovieRowList from "../../Components/Layout/MovieRowList";

const VideoPlayer = ({ results, DetailsDatas, CastData, id }) => {
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
                <div>
                    <DetailsData DetailsData={DetailsDatas} genres={DetailsDatas.genres} number={175} />
                    <CastRow CastData={CastData.cast} />
                    <div className="fadeBottom"></div>
                    <div className="-mt-60">
                        <Player VideoData={results.results} id={DetailsDatas.id} media_type="movie" />
                        <MovieRowList url={`${BasicUrl}/movie/${id}/similar?api_key=${API_KEY}&language=en-US`} title="similar" media_type="movie" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default VideoPlayer;

export async function getServerSideProps(context) {
    const Video = await fetch(`${BasicUrl}/movie/${context.query.DetailsScreen}/videos?api_key=${API_KEY}`).then((res) => res.json());
    const Details = await fetch(`${BasicUrl}/movie/${context.query.DetailsScreen}?api_key=${API_KEY}`).then((res) => res.json());
    const CastRow = await fetch(`${BasicUrl}/movie/${context.query.DetailsScreen}/credits?api_key=${API_KEY}`).then((res) => res.json());
    return {
        props: {
            results: Video,
            DetailsDatas: Details,
            CastData: CastRow,
            id: context.query.DetailsScreen
        }
    }
}
