import Logger from "../Logger.js";
import {
  BASE_URL,
  URL_TOKEN,
  CONTENT_TYPE_URLENCODED,
  CONTENT_TYPE_JSON,
  GRANT_TYPE_CREDENTIALS,
} from "./api_constants.js";
import { LIMIT_ITEMS } from "../Constans.js";

/** Сlass sends requests to the api spotify */
export default class APIController {
  /** authorization data */
  _clientId;
  _clientSecret;

  constructor(clientId, clientSecret) {
    if (!clientId || !clientSecret) {
      Logger.logError("Некорректные значения client id и/или clients secret", false);
    }

    this._clientId = clientId;
    this._clientSecret = clientSecret;
  }

  /**
   * Get url for request
   * @param {string} tale - request link fragment
   */
  getUrl(tale) {
    return `${BASE_URL}${tale || ""}`;
  }

  /**
   * Get token
   */
  getToken = async () => {
    try {
      const result = await fetch(URL_TOKEN, {
        method: "POST",
        headers: {
          "Content-Type": CONTENT_TYPE_URLENCODED,
          Authorization:
            "Basic " + btoa((this._clientId + ":" + this._clientSecret).toString("base64")),
        },
        body: GRANT_TYPE_CREDENTIALS,
      });

      const data = await result.json();
      return data.access_token;
    } catch (error) {
      Logger.logError(error, "Ошибка!Проверьте подключение к интернету");
    }
  };

  /**
   * Get data by request
   * @param {string} url - request url
   * @param {string} offset - item index from which the data set begins, default value 0
   * @param {string} token - token
   */

  getData = async (url, token, limit = LIMIT_ITEMS, offset = 0) => {
    try {
      const result = await fetch(url + "&limit=" + limit + "&offset=" + offset, {
        method: "GET",
        headers: {
          Accept: CONTENT_TYPE_JSON,
          "Content-Type": CONTENT_TYPE_JSON,
          Authorization: "Bearer " + token,
        },
      });
      const data = await result.json();
      return data;
    } catch (error) {
      Logger.logError(error, true);
    }
  };
}
