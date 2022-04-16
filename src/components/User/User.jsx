import React from 'react';

const User = ({user, getUserId}) => {
   const {id, name} = user;
 
    return (
        <div>
            {id}) {name}
            <button onClick={()=>getUserId(id)}>click</button>
        </div>
    );
};

export {User};