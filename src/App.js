import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import SpotifyAuth from './backend/SpotifyAuth';
import { Spotify } from './backend/APIcall';
import ResultContainer from './components/resultcontainer';
import { useState } from 'react';


function App() {

  const [token, setToken] = useState("");
  const [expiration, setExpiration] = useState(0);
  const [tokenType, setType] = useState("");
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [savedTracks, setSavedTracks] = useState([]);

  

  return (
    <div className="App">
       <SpotifyAuth setToken={setToken} setExpiration={setExpiration} setType={setType}/>
       <SearchBar accessToken={token} setTrack={setTracks} setAlbum={setAlbums} setArtists={setArtists}/>
       <h1 className="page_title">Jamming!</h1>
       <ResultContainer tracks={tracks} setSavedTracks={setSavedTracks} setTracks={setTracks} savedTracks={savedTracks}/>
    </div>
  );
}

export default App;
