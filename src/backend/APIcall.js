export {Spotify};

class Spotify {
    
    static async getToken(){

        try {
            const response =  await fetch("http://localhost:3001/api/token",{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'grant_type=client_credentials'
            });
            
            if (!response.ok){
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            
            return data;
        }
        catch (error) {
            console.error('Error fetching the token:', error);
            return null;
        }
    
    }

    static async search(accessToken, searchStr){
        let postBody = {
            token : accessToken,
            searchTerm : searchStr
        };
        try {
            const response = await fetch("http://localhost:3001/api/search", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
               
            });

            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              
            const {artists, tracks, albums} = await response.json();
            //console.log(artists);
            return {
                artists:    artists.items,
                tracks:     tracks.items,
                albums:     albums.items
            };
            
        }
        catch (error) {
            console.error('Error fetching the token:', error);
            return null;
        }
    }
}

