import { Spotify } from "./APIcall"
import { useEffect, useState } from "react"

const  SpotifyAuth  =  ({ setToken, setExpiration, setType })=> {

    const [awaitToken, setAwaitToken] = useState(true);

    let timeoutId = null;



    const fetchToken = async () => {
        try {

            console.log("fetchToken");
            const data = await Spotify.getToken();
        
            if (data) {
                let expiration_time = data.expires_in;
                setToken(data.access_token);
                setExpiration(expiration_time);
                setType(data.token_type);
                setAwaitToken(false);

                // Clear any existing timeout to prevent multiple timers
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // Set up a new timer to refresh the token
                timeoutId = setTimeout(fetchToken, expiration_time  * 1000); 
            }
        } catch (error) {
            console.error('error:', error);
        }
    };

    useEffect(() => {
        fetchToken();
        console.log("useEffect");
        // Cleanup function to clear the timeout when the component unmounts
        return () => {
            console.log("Cleaning up");
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);


    return (
        <div>
            {
               awaitToken  && <p>Loading...</p>
            }
        </div>
    );

}
export default SpotifyAuth;