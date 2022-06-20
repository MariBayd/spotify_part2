import React from 'react';
import SpotifySelect from './UI/Select/SpotifySelect.jsx';

const PostFilter = ({sort, setFilter}) => {
  
    return (    
        <SpotifySelect
          value={sort}
          onChange={selectedSort => setFilter(selectedSort)}
          defaultValue='Сортировка по'
          options={[
            {value:'popularity', name:'По популярности'},
            {value:'title', name:'По алфавиту'}]}
        />
    );
}

export default PostFilter;