import axios from "axios";
import { truncate } from "../../Setting/Setting";
import React, { useEffect, useState } from "react";
import SingleBanner from "./SingleItem/SingleBanner";
import { IMGPATH, unavailableLandscape } from "../../Config/Requst";

const MovieBanner = ({ url, media_type }) => {
    const [Banner, setBanner] = useState([]);
    useEffect(async () => {
        const request = await axios.get(url);
        setBanner(request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ]
        )
        return request
    }, [url])
    return (
        <div className="BannerPoster">
            <SingleBanner
                images={Banner.backdrop_path != null ? IMGPATH + Banner.backdrop_path : unavailableLandscape}
                title={Banner.title || Banner.name || Banner.originam_name}
                description={truncate(Banner.overview, 200)}
                id={Banner.id}
                media_type={!media_type ? Banner.media_type : media_type}
            />
        </div>
    );
}

export default MovieBanner;