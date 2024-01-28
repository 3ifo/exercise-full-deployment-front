import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

const SingleAlbumPage = ()=> {
    const { id } = useParams()
    const [album, setAlbum]= useState("")
    const myServerFetch = async () => {
       const response= await fetch(`http://localhost:3000/albums/${id}`)
        const result = await response.json()
        setAlbum(result)
        console.log(result)

    }
    
    useEffect(()=> {
        myServerFetch()
    }, [])
    return (
        <>
        <h2>AlbumPage</h2>
        <h3>{album.titolo} </h3>
                    <p>Durata: {album.durata}</p>
                    <p>Artista: {album.autore}</p>
                    <p>Uscito il: {album.anno}</p>
        </>

    )
}



export default SingleAlbumPage