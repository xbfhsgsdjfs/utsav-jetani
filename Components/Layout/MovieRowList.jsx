import axios from "axios";
import Slider from "react-slick";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MovieRowSetting } from "../../Setting/Setting";
import { IMGPATH, Unavailable } from "../../Config/Requst";
const MovieRowList = ({ url, title, media_type, Items }) => {
    const router = useRouter()
    const [Poster, setPoster] = useState([]);
    useEffect(async () => {
        if (url != undefined) {
            const request = await axios.get(url);
            setPoster(request.data.results)
        } else {
            setPoster(Items)
        }
    }, [url, Items])
    const handleDragStart = (e) => e.preventDefault();
    return (
        <>
            <h1 className="text-3xl font-bold m-6 pl-2 text-red-600">{title}</h1>
            <div className="ml-5">
                <Slider {...MovieRowSetting}>
                    {Poster.map((e) => (
                        <>
                            <div className="m-3 HoverEffect">
                                <img className="p-1" onDragStart={handleDragStart} alt="images" src={e.poster_path ? IMGPATH + "/" + e.poster_path : Unavailable} />
                                <div className="Title">
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                        <button onClick={media_type === "movie" ? () => router.push(`/Movie/${e.id}`) : () => router.push(`/TvShow/${e.id}`)} className="btn bg-red-700 rounded-xl px-5 py-2 my-2 float-right hover">View</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default MovieRowList;