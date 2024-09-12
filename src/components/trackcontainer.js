
function Track({track, index}){
return (
    <section className="track_container" key={index}>
                    <h3>{track.trackName}</h3>
                    <div className="track_inner_container">
                        <div className="track_image_container"> 
                            <img src={track.smallestImage} alt={track.trackName} />
                        </div>
                        
                        <div className="track_text_container">
                            <p>{track.albumName}</p>
                            <p>{track.artists}</p>
                            <p>Released: {track.releaseYear}</p>
                            
                        </div>
                    </div>
    </section>
    )
}

export default Track;

//<a href={track.songLink} target="_blank" rel="noopener noreferrer">Listen</a>