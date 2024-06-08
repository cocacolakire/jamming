import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import SpotifyAuth from './backend/SpotifyAuth';
import { Spotify } from './backend/APIcall';

import { useState } from 'react';


function App() {

  const [token, setToken] = useState("");
  const [expiration, setExpiration] = useState(0);
  const [tokenType, setType] = useState("");

  return (
    <div className="App">
       <SpotifyAuth setToken={setToken} setExpiration={setExpiration} setType={setType}/>
       <SearchBar accessToken={token}/>
    </div>
  );
}

export default App;
