import { useState } from "react";
import { Spotify } from "../backend/APIcall";

function cleanTracks(tracks) {
    return tracks.map(track => {
        // Extract the necessary information
        const smallestImage = track.album.images.reduce((smallest, image) => {
            return image.height < smallest.height ? image : smallest;
        }, track.album.images[0]);
  
        const trackInfo = {
            id: track.id,
            trackName: track.name,
            albumName: track.album.name,
            artists: track.artists.map(artist => artist.name).join(', '),
            releaseYear: new Date(track.album.release_date).getFullYear(),
            songLink: track.external_urls.spotify,
            smallestImage: smallestImage.url
        };
  
        return trackInfo;
    });
  }

function SearchBar(props){

    let [searchItem, setSearchItem] = useState("");

    function handleChange({target}){
        if (target.name == "searchbox"){
            setSearchItem(target.value);
        }
    }

    const setProps = (searchResp) => {
        
        props.setTrack(cleanTracks(searchResp["tracks"]));
        props.setAlbum(searchResp["albums"]);
        props.setArtists(searchResp["artists"]);
       
    }

    const handleButtonPress = (event) => {
        if (event.target.name == "searchBtn" && searchItem.length > 0){
            event.preventDefault();
           Spotify.search(props.accessToken, searchItem).then(
                (searchResp) => {
                    setProps(searchResp);
                }
            );
            
        }
    }

    const handleKeyPress = (event) => {
        if( event.key === 'Enter' && searchItem.length > 0){
            event.preventDefault();
            Spotify.search(props.accessToken, searchItem).then(
                (searchResp) => {
                    setProps(searchResp);
                }
            );
            ;
        }
    }

    // Refactor this into a representational button component
    return (
        <div className="search_container">
            
            <input className="search_box" 
                   placeholder="Enter song title" 
                   name="searchbox" 
                   value={searchItem} 
                   onChange={handleChange}
                   onKeyDown={handleKeyPress}>

            </input>
            <button name="searchBtn" onClick={handleButtonPress}>
                Search
            </button>

        </div>
    )
}

export default SearchBar;