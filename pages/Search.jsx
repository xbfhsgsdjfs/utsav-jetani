import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "react-slick/lib/slider";
import cross from '../images/search_icon.png';
import React, { useEffect, useState } from "react";
import { MovieRowSetting } from "../Setting/Setting";
import style from "../styles/Search.module.css"
import { API_KEY, BasicUrl, IMGPATH, Unavailable } from "../Config/Requst";

const Search = () => {
    const router = useRouter()
    const [Search, setSearch] = useState("");
    const [Poster, setPoster] = useState([]);

    function HandleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }
    useEffect(async () => {
        const request = await axios.get(Search
            ? `${BasicUrl}/search/multi?api_key=${API_KEY}&query=${Search}&region=US&language=EN`
            : `${BasicUrl}/discover/movie?api_key=${API_KEY}&language=en-US&page=1`);
        setPoster(request.data.results)
    }, [Search])
    return (
        <>
            {/* Create BackGround Banner Poster */}
            <div className="w-full h-screen BannerPoster"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(https://raw.githubusercontent.com/techiecoder2079/Netflix-Clone/main/1.jpg)`
                }}><div className={style.SearchFadeBottom}></div></div>
            {/* Create Search Bar  */}
            <div className="container">
                <input id={style.search} className="input font-serif" placeholder="Search..." onChange={HandleSearch} value={Search} />
                <button className="-ml-10"><Image className='object-contain' src={cross} alt="cross" width={75} height={75} /></button>
            </div>

            {/* Create Search Row List */}
            {Poster.length != 0 ? <div style={{
                marginTop:"-350px"
            }}>
                <div className="mx-10">
                    <Slider {...MovieRowSetting}>
                        {Poster.map((e) => (
                            <>
                                <div className="m-3 HoverEffect">
                                    <img className="rounded-lg" alt="images" src={e.poster_path ? IMGPATH + "/" + e.poster_path : Unavailable} />
                                    <div className="Title">
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                            <button onClick={() => router.push(`Movie/${e.id}`)} className="btn bg-red-700 rounded-xl px-5 py-2 my-2 float-right hover">View</button>
                                        </div>
                                    </div>
                                </div>
                            </>

                        ))}
                    </Slider>
                </div>
            </div> : <><div className="-mt-80 text-4xl"><h1 className="text-red-800 flex justify-center">No Records found</h1></div></>}

        </>
    );
}

export default Search;