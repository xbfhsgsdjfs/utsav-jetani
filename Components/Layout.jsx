import Header from "./Header";
import Image from 'next/image';
import MovieLogo from "../images/2.jpg"
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
    const [loader, setloader] = useState(false)

    useEffect(() => {
        setloader(true)
        setTimeout(() => {
            setloader(false)
        }, 4000)
    }, [])
    return (
        <>
            {loader ? <>
            <div className='flex justify-center mt-48'><Image className='object-contain' src={MovieLogo} width={600} height={500} /></div></> : <><Header />{children}</>}
        </>
    );
}

export default Layout;