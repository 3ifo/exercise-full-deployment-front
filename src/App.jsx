
import './App.css'
import {Link, Route, Routes} from "react-router-dom"
import AlbumsPage from './AlbumsPage'
import HomePage from './HomePage'
import MusiciansPage from './MusiciansPage'
import SingleAlbumPage from './SingleAlbumPage'
import SingleMusicianPage from './SingleMusicianPage'
import CreateAlbum from './CreateAlbum'
import CreateMusician from "./CreateMusician"
import './index.css'

function App() {
  


  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/albums">Albums</Link>
          </li>
          <li>
          <Link to="/musicians">Musicians</Link>
          </li>
          <li>
          <Link to="/createAlbum">CreateAlbum</Link>
          </li>
         <li>
         <Link to="/createMusician">CreateMusician</Link>
         </li>
          
      </ul>
    </nav>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/albums" element={<AlbumsPage/>}/>
      <Route path="/album/:id" element={<SingleAlbumPage/>}/>
      <Route path="/musicians" element={<MusiciansPage/>}/>
      <Route path="/musician/:id" element={<SingleMusicianPage/>}/>
      <Route path="/createAlbum" element={<CreateAlbum/>}/>
      <Route path="/createMusician" element={<CreateMusician/>}/>
     </Routes>
    </>
  )
}

export default App
