export const CLIENT_ID = "d0b55c9378d0473eb89d96c3b2e1a01c";
export const CLIENT_SECRET = "00f9a24f25254ee4a3313f66fdbb0968";

/** Base URL for requests */
export const BASE_URL = "https://api.spotify.com/v1";

export const URL_TOKEN = "https://accounts.spotify.com/api/token";
/** URL to request new releases */
export const URL_NEW_RELEASES = "/browse/new-releases?";
/** URL to request featured playlists. To filter by country, add &country=  and value to the end */
export const URL_FETURED_PLAYLISTS = "/browse/featured-playlists?";
/** Search URL. When used, add the query value. Necessarily to add the type of search to the end: &type=artist or &type=track */
export const URL_SEARCH = "/search?q=";
/** URL to request recommended genres */
export const URL_GENRES = "recommendations/available-genre-seeds";
/** URL to request current user's playlists */
export const URL_USERS_PLAYLISTS = "me/playlists";

/** values for request header content type */
export const CONTENT_TYPE_URLENCODED = "application/x-www-form-urlencoded";
export const CONTENT_TYPE_JSON = "application/json";
/** value of grant type */
export const GRANT_TYPE_CREDENTIALS = "grant_type=client_credentials";
