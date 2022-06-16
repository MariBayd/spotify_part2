import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            posts = [...posts].sort((a, b) =>  a.title > b.title ? 1 : -1) 
            } 
      }, [sort, posts]);

      return sortedPosts;   
      
}

