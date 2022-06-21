import React, {useState} from 'react';
import ContentList from './ContentList';


const ContentLists = ({items}) => {

    return (
        <div>
            {items.map(item=>
                <ContentList key={item.title} posts={item.posts} title={item.title}  />
            )}
        </div> 
    )
}

export default ContentLists;