import { useState } from "react";
import axios from "axios";

const CreateAlbum = () => {
    const [data, setData] = useState({
        titolo: "",
        autore: "",
        anno: "",
        durata: ""
    });

    const createAlbum = (obj)=> {
        axios.post(`http://localhost:3000/albums`, obj)
        .then(setData({titolo: "",
        autore: "",
        anno: "",
        durata: ""}))
    }

    return (
        <div className="createAlbum">
            <label>Nome</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    titolo: e.target.value,
                   
                }))}
                value={data.titolo}
                type="text"
            />
            <label>Durata</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    durata: e.target.value
                   
                }))}
                value={data.durata}
                type="number"
            />
            <label>Artista</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    autore: e.target.value
                }))}
                value={data.autore}
                type="text"
            />
            <label>Anno di uscita</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    anno: e.target.value
                }))}
                value={data.anno}
                type="number"
            />
            <button onClick={()=> createAlbum(data)}>Create Album</button>
        </div>
    );
};

export default CreateAlbum;
