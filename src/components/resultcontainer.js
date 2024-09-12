import Track from "./trackcontainer";

function cleanTracks(tracks) {
    return tracks.map(track => {
        // Extract the necessary information
        const smallestImage = track.album.images.reduce((smallest, image) => {
            return image.height < smallest.height ? image : smallest;
        }, track.album.images[0]);

        const trackInfo = {
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

function ResultContainer({tracks}){
    console.log(tracks);
    const cleanedTracks = cleanTracks(tracks);
    console.log(cleanedTracks);
    return (
        <div className="result_container">
        <h1 className="page_title">Jamming!</h1>
        <section className="tracklist_contaienr">
            {
                cleanedTracks.map((track, index) => (
                    <Track track={track} index={index} key={index}/>
                ))
            }
        </section>
        </div>
    )
}

export default ResultContainer;