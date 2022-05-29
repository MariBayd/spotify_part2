import Logger from './Logger.js';

/** Сlass sends requests to the api spotify */
export default class APIController {
  
  /** authorization data */
  _clientId;
  _clientSecret;

  /** URL to request new releases */
  urlNewReleases = 'https://api.spotify.com/v1/browse/new-releases?';
  /** URL to request featured playlists. To filter by country, add &country=  and value to the end */
  urlFeturedPlaylists = 'https://api.spotify.com/v1/browse/featured-playlists?';
  /** Search URL. When used, add the query value. Necessarily to add the type of search to the end: &type=artist or &type=track */
  urlSearch = 'https://api.spotify.com/v1/search?q=';
  /** URL to request recommended genres */
  urlGenres = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';
  /** URL to request current user's playlists */
  urlUsersPlaylists = 'https://api.spotify.com/v1/me/playlists';

  constructor(clientId, clientSecret) {
    if (!clientId || !clientSecret) {
      Logger.logError('Некорректные значения параметров', false);
    }
    
    this._clientId = clientId;
    this._clientSecret = clientSecret;
  }

  /** 
   * Get token
   */
  getToken = async () => {
    try{
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Basic ' + btoa((this._clientId + ':' + this._clientSecret).toString('base64')),
          },
        body:  'grant_type=client_credentials',
        });

      const data = await result.json();
      return data.access_token;
      } 
      catch(error) {
        Logger.logError(error, 'Ошибка!Проверьте подключение к интернету');
      }

    }

    /** 
     * Create wrapper for elements, insert wrapper to document
     * @param {string} url - request url
     * @param {string} offset - item index from which the data set begins, default value 0
     * @param {string} token - token
     */

    getData = async (url, offset=0, token) => {
      try{
        const result = await fetch(url + '&offset=' + offset, {
        method:  'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer ' + token,
          }
        });
        const data = await result.json();
        return data;
        } catch {
          Logger.logError(error, true);
      }
      
      }
  }