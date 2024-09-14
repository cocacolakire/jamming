import Track from "./trackcontainer";


function ResultContainer({tracks, setSavedTracks, setTracks, savedTracks}){

    function saveTrack(track) {
        setTracks(tracks.filter((currTrack) => currTrack.id !== track.id));
        setSavedTracks(prevTracks => [...prevTracks, track]);
    }
    function removeTrack(track){
        setTracks(prevTracks => [...prevTracks, track]);
        setSavedTracks(savedTracks.filter(savedTrack => savedTrack.id !== track.id));
    }

    return (
        <div className="result_container">
        
        <section className="tracklist_contaienr">
            <h3 className="page_title">Results</h3>
            {
                tracks.map((track, index) => (
                    <Track track={track} index={index} key={index} buttonAction={saveTrack} result={true}/>
                ))
            }
        </section>
        <section className="tracklist_contaienr">
            <h3 className="page_title">Saved tracks</h3>
            {
                savedTracks.map((track, index) => (
                    <Track track={track} index={index} key={index} buttonAction={removeTrack} result={false}/>
                ))
            }
            {
                savedTracks.length && "Create playlist"
            }
        </section>
        </div>
    )
}

export default ResultContainer;