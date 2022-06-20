import ReactPlayer from 'react-player';

const Player = ({ VideoData, id, media_type }) => {
    return (
        <>
            {VideoData.length !== 0
                ? VideoData.map((e) => (
                    e.name == "Official Trailer" || e.name == VideoData[0].name
                        ?
                        <>
                            <h1 className="text-3xl font-bold m-6 pl-24 text-red-600 flex">{e.name}</h1>
                            <div className="flex flex-wrap m-3 justify-center">
                                <ReactPlayer
                                    width="90%"
                                    height="80vh"
                                    url={`https://www.youtube.com/watch?v=${e.key}`}
                                    controls={true}
                                />
                            </div>
                        </>
                        : null
                )) :
              null
            }
        </>
    );
}

export default Player;