import axios from 'axios';
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import downArrow from "../Images/down.png";
import { useEffect, useState } from 'react';
import { GenresURL } from '../Config/Requst';
import MovieLogo from "../Images/movie_logo.png"
function Header() {
    const router = useRouter();
    const [Genres, SetGenres] = useState([])

    useEffect(async () => {
        const request = await axios.get(GenresURL)
        SetGenres(request.data.genres);
        console.log(request.data.genres);
    }, [GenresURL])

    return (
        <>
            <header className='flex flex-col sm:flex-row justify-between h-auto'>
                <Link href="/"><Image className='object-contain cursor-pointer' src={MovieLogo} width={250} height={120} /></Link>
                <div className='flex flex-grow justify-evenly max-w-2xl mt-10 font-bold'>
                    <div className="flex flex-col items-center cursor-pointer group w-12  sm:w-20 hover:text-white ">
                        <Link href="/"><p className={router.pathname == "/" ? "tracking-widest text-xl text-red-600 font-bold active p-2 mx-3" : "mx-3 p-2 tracking-widest text-xl text-red-600 font-bold"}>Home</p></Link>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer group w-12  sm:w-20 hover:text-white ">
                        <Link href="/TvShow"><p className={router.pathname == "/TvShow" || router.pathname.replace("/[TvShowDetails]", "") == "/TvShow" ? "tracking-widest text-lg text-red-600 font-bold active p-2 mx-3" : "mx-3 p-2 tracking-widest text-lg text-red-600 font-bold"}>TvShow</p></Link>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer group w-12  sm:w-20 hover:text-white ">
                        <Link href="/Movie"><p className={router.pathname == "/Movie" || router.pathname.replace("/[DetailsScreen]", "") == "/Movie" ? "tracking-widest text-lg text-red-600 font-bold active p-2 mx-3" : "mx-3 p-2 tracking-widest text-lg text-red-600 font-bold"}>Movie</p></Link>
                    </div>
                    <div class="dropdown">
                        <div className='flex p-2'>
                            <button class="tracking-widest text-lg text-red-600 font-bold">Category</button>
                            <Image className='object-contain' src={downArrow} width={25} height={25} />
                        </div>
                        <div class="dropdown-content text-center">
                            {Genres.map((e) => (
                                <>
                                    <Link href={`/Category/${e.id}?CategoryName=${e.name}`}><a href="#" className={router.query.CategoryName == e.name ? "text-red-600 hover:text-white text-xl active" : "text-red-600 hover:text-white text-xl"}>{e.name}</a></Link>
                                </>))}
                        </div>
                    </div>
                    {/* <div className="flex flex-col items-center cursor-pointer group w-12  sm:w-20 hover:text-white ">
                        <Link href="/Search"><p className={router.pathname == "/Search" ? "tracking-widest text-lg text-red-600 font-bold active p-2 mx-3" : "mx-3 p-2 tracking-widest text-lg text-red-600 font-bold"}>Search</p></Link>
                    </div> */}
                    {/* <div className="flex flex-col items-center cursor-pointer group w-12  sm:w-20 hover:text-white ">
                        <Link href="/Account"><p className={router.pathname == "/Account" ? "tracking-widest text-lg text-red-600 font-bold active p-2 mx-3" : "mx-3 p-2 tracking-widest text-lg text-red-600 font-bold"}>Account</p></Link>
                    </div> */}
                </div>
            </header>
        </>
    )
}

export default Header
