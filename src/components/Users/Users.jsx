import React, { useState, useEffect } from "react";
import { userService } from "../../services/user.service";
import User from "../User/User";

const Users = ({ setUserDetails, postsZero }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(({ data }) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((value) => (
        <User key={value.id} user={value} setUserDetails={setUserDetails} postsZero={postsZero} />
      ))}
    </div>
  );
};

export default Users;
