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

    static async search(accessToken){
        let postBody = {
            token : accessToken
        };
        try {
            const response = await fetch("http://localhost:3001/api/search", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
               
            });
        }
        catch (error) {
            console.error('Error fetching the token:', error);
            return null;
        }
    }
}

