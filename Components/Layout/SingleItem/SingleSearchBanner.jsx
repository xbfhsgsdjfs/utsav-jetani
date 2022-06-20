const SingleCategoryBanner = ({ images }) => {
    return (
        <>
            <div>
                <div className="w-full h-screen" style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${images})`
                }}><div className="search-fadeBottom"></div></div>

            </div>
        </>
    );
}

export default SingleCategoryBanner;