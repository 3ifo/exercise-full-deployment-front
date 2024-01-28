import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  const myServerFetch = async () => {
    try {
      const response = await fetch("http://localhost:3000/albums");
      const result = await response.json();
      setAlbums(result);
      console.log(result);
    } catch (error) {
      console.error("Errore durante il recupero degli album:", error);
    }
  };

  useEffect(() => {
    myServerFetch();
  }, []);

  return (
    <div>
      <h1>Ecco gli album</h1>
      {albums.map((a, index) => (
        <div className="album-div" key={index}>

          
<Link to={`/album/${a._id}`}><p>Nome: <strong>{a.titolo}</strong></p></Link>
            <p>Durata: {a.durata}m</p>
            <p>Artista: {a.autore}</p>
            <p>Uscito il: {a.anno}</p>
          
        </div>
      ))}
    </div>
  );
};

export default AlbumsPage;
