import { EpisodeSetting } from "../../Setting/Setting";

const EpisodeRow = ({ data }) => {
    // Get Id Function
    function handleEpisode(e) {
        e.preventDefault();
        SetepisodesId(e.target.id)
    }

    return (
        <>
            <Slider {...EpisodeSetting}>
                {data.map((e) => (
                    <div className="m-2" >
                        <img id={e.episode_number} onClick={handleEpisode} className="w-72 h-80" src={e.still_path ? Imagew500 + e.still_path : noPicture} onDragStart={handleDragStart} />
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default EpisodeRow;