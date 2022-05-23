import Logger from "./Logger.js";

/** Сlass sends requests to the api spotify */
  export class APIController {
  
   clientId = 'd0b55c9378d0473eb89d96c3b2e1a01c';
   clientSecret = '00f9a24f25254ee4a3313f66fdbb0968';

 /** 
 * Get token
 */
   getToken = async () => {
    try{
        const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa((this.clientId + ':' + this.clientSecret).toString('base64')),
        },
        body:  'grant_type=client_credentials',
      });
      const data = await result.json();
      return data.access_token;
    } 
    catch(error) {
      Logger.logRequestError(error);
    }

  }

  /** 
 * Refresh token 
 * @param {string} token - token 
 */

  refreshToken = async (token) => { 
    const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Refresh-token': token,
          },
          body: 'grant_type=client_credentials'
      });

    const data = await result.json();
    return data.access_token;
  }

 /** 
 * Get recommended genres 
 * @param {string} token - token 
 */
  
   getGenres = async (token) => {

    const result = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.genres;
}

/** 
 * Get new releases
 * @param {string} token - token 
 */

 getNewReleases = async (token, offset=20) => {
  try {
    const result = await fetch('https://api.spotify.com/v1/browse/new-releases?' + '&offset=' + offset, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
    }
  });
    const data = await result.json();
    return data.albums.items;
  } catch {
    Logger.logRequestError(error);
  }
  
  }

 /** 
 * Get сurrent user's playlists
 * @param {string} token - token 
 */

  getCurrentUsersPlaylists = async (token) => {
    try {
      const result = await fetch('https://api.spotify.com/v1/me/playlists', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      }
    });

    const data = await result.json();
    return data;
    } catch {
      Logger.logRequestError(error);
    }
    
  }

/** 
 * Get featured playlists by country
 * @param {string} token - token 
 * @param {string} country - search country 
 */

  getFeaturedPlaylist = async (token, country='') => {
    try {
      const result = await fetch('https://api.spotify.com/v1/browse/featured-playlists?' + 'country=' +country, {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
      }
    });
    const data = await result.json();
    return data.playlists.items;
    } catch {
      Logger.logRequestError(error);
    }
    
  }

  /** 
 * Get tracks by search query
 * @param {string} token - token 
 * @param {string} query - search query 
 */

  getTracksBySearch = async (token, query) => {
    try {
      const result = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=track', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
      }
    });
    const data = await result.json();
    return data;
    } catch {
      Logger.logRequestError(error);
    }
    
  }

/** 
 * Get artists by search query
 * @param {string} token - token 
 * @param {string} query - search query 
 */

  getArtistsBySearch = async (token, query, offset=0) => {
    try {
       const result = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=artist' + '&offset=' + offset, {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
      }
    });
    const data = await result.json();

    return data.artists.items;
    } catch {
      Logger.logRequestError(error);
    }
   
  }

}