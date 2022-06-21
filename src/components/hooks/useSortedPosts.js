import { useEffect} from 'react';

export const useSortedPosts = ({posts, sort}) => {
    let sortedPosts = [];
    useEffect( () => { 
        if (sort === 'name') {
          sortedPosts =  [...posts].sort((a, b) =>  a[sort].localeCompare(b[sort]));
        }
        else {
          sortedPosts =  [...posts].sort((a, b) =>  a[sort] > b[sort] ? -1: 1)
        }
      }, [sort])
      return sortedPosts;    
}

