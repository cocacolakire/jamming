
function Track({track, index, buttonAction, result}){
return (
    <section className="track_container" key={index}>
                    <h3 className="trackname">{track.trackName}</h3>
                    <div className="track_inner_container">
                        <div className="track_image_container"> 
                            <img src={track.smallestImage} alt={track.trackName} />
                        </div>
                        
                        <div className="track_text_container">
                            <p>{track.albumName}</p>
                            <p>{track.artists}</p>
                            <p>Released: {track.releaseYear}</p>
                            
                        </div>
                        <div className="btn_container">
                            <button className={result ? "add_track_btn" : "remove_track_btn"} onClick={() => buttonAction(track)}>
                                {result ? "Save" : "Remove"}
                            </button>
                        </div>
                    </div>
    </section>
    )
}

export default Track;

//<a href={track.songLink} target="_blank" rel="noopener noreferrer">Listen</a>