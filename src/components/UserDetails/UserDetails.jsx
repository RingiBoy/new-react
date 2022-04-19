import React from 'react';

const UserDetails = ({userDetails, getUserId}) => {
    
    const {id, username, email} = userDetails
    return (
        <div>
           {id}, {username}, {email}
           <button onClick={()=> getUserId(id)}>get posts on this user</button> 
           
        </div>
    );
};

export default UserDetails;