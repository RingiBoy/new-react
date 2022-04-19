import React from 'react';

const Post = ({post}) => {
const {id, body, title}=post    
    
    return (
        <div>
            {id}, {body}, {title}
        </div>
    );
};

export default Post;