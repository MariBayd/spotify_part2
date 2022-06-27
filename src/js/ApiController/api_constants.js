export const clientId = "d0b55c9378d0473eb89d96c3b2e1a01c";
export const clientSecret = "00f9a24f25254ee4a3313f66fdbb0968";

/** URL to request new releases */
export const urlNewReleases = "https://api.spotify.com/v1/browse/new-releases?";
/** URL to request featured playlists. To filter by country, add &country=  and value to the end */
export const urlFeturedPlaylists =
  "https://api.spotify.com/v1/browse/featured-playlists?";
/** Search URL. When used, add the query value. Necessarily to add the type of search to the end: &type=artist or &type=track */
export const urlSearch = "https://api.spotify.com/v1/search?q=";
/** URL to request recommended genres */
export const urlGenres =
  "https://api.spotify.com/v1/recommendations/available-genre-seeds";
/** URL to request current user's playlists */
export const urlUsersPlaylists = "https://api.spotify.com/v1/me/playlists";
