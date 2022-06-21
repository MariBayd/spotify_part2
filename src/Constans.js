/** debounce time for search input*/
export const debounceTimeout = 1500;

/** urls of images*/
export const defaultViewImg = 'artist.svg';
export const headerImg = 'Spotify_logo_with_text.svg';
export const navHomeActive = 'icon-home_fill-white.svg';
export const navHomeInactive = 'icon-home_stroke-grey.svg';
export const navSearchActive = 'icon-search-white.svg';
export const navSearchInactive = 'icon-search-grey.svg';

/** values for inline styles*/
export const headerButtonFontSize = 35;

/**values for nav */
export const navMain = [
    {title:'Главная', link:'/', imgSrc: navHomeActive , alt:'icon-home'},
    {title:'Поиск', link:'/search', imgSrc: navSearchInactive, alt:'icon-search'}];
export const navSearch = [
    {title:'Главная', link:'/', imgSrc: navHomeInactive, alt:'icon-home'},
    {title:'Поиск', link:'/search', imgSrc: navSearchActive, alt:'icon-search'}];
