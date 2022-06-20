import { truncate } from "../../Setting/Setting";
import MovieRowList from "../../components/layout/MovieRowList";
import SingleBanner from "../../components/layout/SingleItem/SingleBanner";
import { API_KEY, BasicUrl, IMGPATH, unavailableLandscape } from "../../Config/Requst";

const Categorys = ({ Genres, Name, Up }) => {
    const BennerData = Genres[
        Math.floor(Math.random() * Genres.length)
    ]
    return (
        <>
            {/* Banner Components */}
            <div className="BannerPoster">
                <SingleBanner
                    images={BennerData.backdrop_path != null ? IMGPATH + BennerData.backdrop_path : unavailableLandscape}
                    title={BennerData.title || BennerData.name || BennerData.originam_name}
                    description={truncate(BennerData.overview, 200)}
                    id={BennerData.id}
                    media_type="movie"
                />
            </div>
            {/* MovieRow List Components */}
            <div style={{ marginTop: "-29rem" }}></div>
            <MovieRowList Items={Up} title={`UpComing ${Name}`} media_type="movie" />
            <MovieRowList Items={Genres} title={Name} media_type="movie" />
        </>
    );
}

export default Categorys;

export async function getServerSideProps(context) {
    const UpComping = await fetch(`${BasicUrl}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&with_genres=${context.query.Categorys}`).then((res) => res.json());
    const GenresRow = await fetch(`${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${context.query.Categorys}`).then((res) => res.json());
    return {
        props: {
            Genres: GenresRow.results,
            Up: UpComping.results,
            Name: context.query.CategoryName
        }
    }
}