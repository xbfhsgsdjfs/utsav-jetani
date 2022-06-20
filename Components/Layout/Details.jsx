import { truncate } from "../../Setting/Setting";
import { IMGPATH, Unavailable } from "../../Config/Requst";

const Details = ({ DetailsData, genres }) => {

    return (
        <>
            <div className="DetailsPages flex text-white my-10">
                <img className="rounded-lg" alt="images" src={DetailsData.poster_path ? IMGPATH + "/" + DetailsData.poster_path : Unavailable} width={350} />
                <div className="ml-10 text-white">
                    <h1 className="-mt-5" style={{ fontSize: "40px" }}>Title : {DetailsData.title || DetailsData.name}</h1>
                    <h1 className="flex text-lg mt-2">
                        {genres != undefined ? genres.map((e) => (
                            <h1 className="border-2 m-2 py-1 px-5 rounded-3xl">{e.name}</h1>
                        )) : null}

                    </h1>
                    <div>
                        <p className="flex flex-wrap text-xl m-2 pl-1 Paragraph">
                            {truncate(DetailsData.overview, 200)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;