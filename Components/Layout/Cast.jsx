import AliceCarousel from "react-alice-carousel";
import { responsive } from "../../Setting/Setting";
import { Imagew500, noPicture } from "../../Config/Requst";

const Cast = ({ CastData }) => {
    const handleDragStart = (e) => e.preventDefault();

    const CastPoster = CastData.map((c) => (
        <div style={{ padding: "5px", objectFit: "contain" }}>
            <img
                src={c.profile_path ? `${Imagew500}/${c.profile_path}` : noPicture}
                alt={c?.name}
                onDragStart={handleDragStart}
                style={{
                    borderRadius: "20px",
                    width: "180px",
                    height: "250px",
                    marginBottom: "5px",
                }}
            />
            <b style={{
                display: "flex",
                justifyContent: "center",
                color: "#fff"
            }}>{c?.name}</b>
        </div>
    ));

    return (
        <>
            <div className="CarouselSlider">
                <div className="flex">
                    <h1 className="text-3xl font-bold m-3 text-white">CastDetails</h1>
                </div>
                <AliceCarousel
                    mouseTracking
                    infinite
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    items={CastPoster}
                />
            </div>
        </>
    );
}

export default Cast;