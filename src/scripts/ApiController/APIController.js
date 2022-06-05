import Logger from '../Logger.js';

/** Сlass sends requests to the api spotify */
export default class APIController {
  
  /** authorization data */
  _clientId;
  _clientSecret;
  
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
    } catch(error) {
      Logger.logError(error, 'Ошибка!Проверьте подключение к интернету');
    }
  }

  /** 
    * Create wrapper for elements, insert wrapper to document
    * @param {string} url - request url
    * @param {string} offset - item index from which the data set begins, default value 0
    * @param {string} token - token
    */

  getData = async (url, token, offset=0) => {
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