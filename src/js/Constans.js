import Main from "../components/pages/Main.jsx";
import Search from "../components/pages/Search.jsx";

/** debounce time for search input*/
export const DEBOUNCE_TIMEOUT = 1500;
export const DEBOUNCE_TIMEOUT_DEFAULT = 300;

/** urls of images*/
export const DEFAULT_VIEW_IMG = "artist.svg";
export const HEADER_IMG = "Spotify_logo_with_text.svg";
export const NAV_HOME_ACTIVE = "icon-home_fill-white.svg";
export const NAV_HOME_INACTIVE = "icon-home_stroke-grey.svg";
export const NAV_SEARCH_ACTIVE = "icon-search-white.svg";
export const NAV_SEARCH_INACTIVE = "icon-search-grey.svg";

/** values for inline styles*/
export const HEADER_BUTTON_FONT_SIZE = 35;

/**values for nav */
export const NAV_MAIN = [
  { title: "Главная", link: "/", imgSrc: NAV_HOME_ACTIVE, alt: "icon-home" },
  { title: "Поиск", link: "/search", imgSrc: NAV_SEARCH_INACTIVE, alt: "icon-search" },
];

export const NAV_SEARCH = [
  { title: "Главная", link: "/", imgSrc: NAV_HOME_INACTIVE, alt: "icon-home" },
  { title: "Поиск", link: "/search", imgSrc: NAV_SEARCH_INACTIVE, alt: "icon-search" },
];

/**values for routing */

export const APP_ROUTES = [
  { path: "/", page: <Main /> },
  { path: "search", page: <Search /> },
];

/**values for select for sorting on search page */
export const SELECT_SORT_OPTIONS = [
  { value: "popularity", name: "По популярности" },
  { value: "name", name: "По алфавиту" },
];

/**value for sort by name */
export const SORT_BY_NAME = "name";

/**value for artist items */
export const ARTIST_CONST = "Исполнитель";

/**value for artist items */
export const LIMIT_ITEMS = 20;