import { useState } from "react";
import { Spotify } from "../backend/APIcall";

function SearchBar(props){

    let [searchItem, setSearchItem] = useState("");

    function handleChange({target}){
        if (target.name == "searchbox"){
            setSearchItem(target.value);
        }
    }

    const handleButtonPress = (event) => {
        if (event.target.name == "searchBtn" && searchItem.length > 0){
            event.preventDefault();
            Spotify.search(props.accessToken);
            //alert("You pressed button");
        }
    }

    const handleKeyPress = (event) => {
        if( event.key === 'Enter' && searchItem.length > 0){
            event.preventDefault();
            Spotify.search(props.accessToken);
            alert("you pressed enter")
        }
    }

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