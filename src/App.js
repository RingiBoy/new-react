import React, { useEffect, useState } from "react";

import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";
import css from "./App.module.css";
import { postService } from "./services/post.service";

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  const [posts, setPosts] = useState([]);

  const getUserId = (userId) => {
    postService.getPostsById(userId).then(({ data }) => setPosts(data));
  };

  const postsZero=()=>setPosts([]);
  return (
    <div>
      <div className={css.wrap}>
        <Users setUserDetails={setUserDetails} postsZero={postsZero}/>
        {userDetails && (
          <UserDetails userDetails={userDetails} getUserId={getUserId} />
        )}
      </div>

      {userDetails && <Posts posts={posts} />}
    </div>
  );
};

export default App;
