import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import ModalVideo from "react-modal-video";
import { truncate } from "../../../Setting/Setting";
import { API_KEY, BasicUrl } from "../../../Config/Requst";

const SingleBanner = ({ images, title, description, Button, id, media_type }) => {
    const router = useRouter()
    const [key, setkey] = useState()
    const [isOpen, setOpenModal] = useState(false);

    function handelVideo() {
        const fetchVideo = async () => {
            const { data } = await axios.get(
                `${BasicUrl}/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
            );
            setkey(data.results.length == 0 ? null : data.results[0].key);
        };
        fetchVideo()
        setOpenModal(true)
    }
    return (
        <>
            {key === null ? null :
                process.browser && <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={key} onClose={() => setOpenModal(false)} />}
            <header
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${images})`,
                    color: "#CCC",
                    height: "100vh",
                    marginTop: "-160px"
                }}>
                <div className="banner-contents mt-4">
                    <h1 className="banner-title">
                        {title}
                    </h1>
                    <h1 className="banner-description">{truncate(description, 100)}</h1>
                    <div className="banner-buttons">
                        <button className="banner-button" onClick={media_type === "movie" ? () => router.push(`/Movie/${id}`) : () => router.push(`/TvShow/${id}`)}>MovieDetails</button>
                        <button className="banner-button" onClick={handelVideo}>{Button ? Button : "WatchTrailer"}</button>
                    </div>
                </div>
                <div className="banner-fadeBottom"></div>
            </header>
        </>
    );
}

export default SingleBanner;