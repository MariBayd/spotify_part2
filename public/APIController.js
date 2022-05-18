//import fetch from 'node-fetch';

/** Сlass sends requests to the api spotify */
  export class APIController {
  
   clientId = 'd0b55c9378d0473eb89d96c3b2e1a01c';
   clientSecret = '00f9a24f25254ee4a3313f66fdbb0968';
  
   handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
    }

 /** 
 * Get token
 */
   _getToken = async () => {

      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded', 
              'Authorization' : 'Basic ' + btoa((this.clientId + ':' + this.clientSecret).toString('base64')),
          },
          body:  'grant_type=client_credentials',
      })
      .catch(error => alert('Ошибка! Проверьте подключение к интернету'));

      const data = await result.json();
      return data.access_token;
  }

  _refreshToken = async (token) => { 
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
 * Get genres
 * @param {string} token - token 
 */
  
   _getGenres = async (token) => {

    const result = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    })
    .then(this.handleErrors)
    .catch(error => alert('Ошибка! Проверьте подключение к интернету'));

    const data = await result.json();
    return data.genres;
}

/** 
 * Get new releases, return 20 items.
 * @param {string} token - token 
 */

 _getNewReleases = async (token) => {

  const result = await fetch('https://api.spotify.com/v1/browse/new-releases', {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
    }
  })
  .then(this.handleErrors)
  .catch(error => alert('Ошибка! Проверьте подключение к интернету'));
  const data = await result.json();
  return data.albums.items;
  }

 /** 
 * Get сurrent user's playlists
 * @param {string} token - token 
 */

  _getCurrentUsersPlaylists = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/me/playlists', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + token,
      }
    })
    .then(this.handleErrors)
    .catch(error => alert('Ошибка! Проверьте подключение к интернету'));;
    const data = await result.json();
    return data;
  }

  _getFeaturedPlaylist = async (token, country='') => {
    const result = await fetch('https://api.spotify.com/v1/browse/featured-playlists?' + 'country=' +country, {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
      }
    })
    .then(this.handleErrors)
    .catch(error => alert('Ошибка! Проверьте подключение к интернету'));
    const data = await result.json();
    return data.playlists.items;
  }


  _getTracksBySearch = async (token, query) => {
    const result = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=track', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
      }
    })
    .then(this.handleErrors)
    .catch(error => alert('Ошибка! Проверьте подключение к интернету'));
    const data = await result.json();
    return data;
  }

/** 
 * Get artists by search
 * @param {string} token - token 
 * @param {string} query - query 
 */

  _getArtistsBySearch = async (token, query) => {
    const result = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=artist', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token,
      }
    })
    .then(this.handleErrors)
    .catch(error => alert('Ошибка! Проверьте подключение к интернету'));
    const data = await result.json();

    return data.artists.items;
  }

}

//console.log( Buffer.from(clientId + ':' + clientSecret).toString('base64'));

//console.log(encoder.encode((clientId + ':' + clientSecret).toString('base64') ));

//const apiController = new APIController();
//const token = await apiController._getToken();

//console.log(await token);
