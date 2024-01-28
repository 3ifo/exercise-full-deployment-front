import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const MusiciansPage = ()=> {
    const [musicians, setMusicians]= useState([])
    const myServerFetch = async () => {
       const response= await fetch("http://localhost:3000/musicians")
        const result = await response.json()
        setMusicians(result)
        console.log(result)
    }
    
    useEffect(()=> {
        myServerFetch()
    }, [])

    return (
        <div>
            <h1>Ecco gli artisti</h1>
            {musicians.map((a, index) => (
                <div key={index}>
                    <Link to={`/musician/${a._id}`}><p>Nome: <strong>{a.nome}</strong></p></Link>
                    <p>{a.fullname}</p>
                    <p>{a.artname}</p>
                    <p>{a.età}</p>

                </div>
            ))}
        </div>
    );
    

}







export default MusiciansPage;