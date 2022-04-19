import React from "react";

const User = ({ user, setUserDetails, postsZero }) => {
  const { id, name } = user;

const userUpdate =()=>{
    setUserDetails(user)
    postsZero()
}

  return (
    <div>
      {id} -- {name}
      <button onClick={() => userUpdate()}>get details</button>
      <br />
    </div>
  );
};

export default User;
