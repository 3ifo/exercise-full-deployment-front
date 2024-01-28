import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const SingleMusicianPage = ()=> {
    const {id} = useParams()
    const [musician, setMusician]= useState("")
    const myServerFetch = async () => {
       const response= await fetch(`http://localhost:3000/musicians/${id}`)
        const result = await response.json()
        setMusician(result)
        console.log(result)
    }
    
    useEffect(()=> {
        myServerFetch()
    }, [id])
    return (
        <>
        <h2>MusicianPage</h2>
        <h3>{musician.nome}</h3>
                    <p>{musician.artname}</p>
                    <p>{musician.età}</p>
        </>

    )
}



export default SingleMusicianPage