import { useState } from "react";
import axios from "axios";

const createMusician = () => {
    const [data, setData] = useState({
        nome: "",
        fullname: "",
        artname: "",
        età: ""
    });

    const createMusician = (obj)=> {
        axios.post(`http://localhost:3000/musicians`, obj)
        .then(setData({nome: "",
        fullname: "",
        artname: "",
        età: ""}))
    }

    return (
        <div className="createMusician">
            <label>Nome</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    nome: e.target.value,
                   
                }))}
                value={data.nome}
                type="text"
            />
            <label>Nome Completo</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    fullname: e.target.value
                   
                }))}
                value={data.fullname}
                type="text"
            />
            <label>Nome d'arte</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    artname: e.target.value
                }))}
                value={data.artname}
                type="text"
            />
            <label>Età</label>
            <input
                onChange={(e) => setData((curr) => ({
                    ...curr,
                    età: e.target.value
                }))}
                value={data.età}
                type="number"
            />
            <button onClick={()=> createMusician(data)}>Create Musician</button>
        </div>
    );
};



export default createMusician