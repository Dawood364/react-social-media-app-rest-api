import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/store-list";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { PostLists, Fetching } = useContext(PostListData);

  return (
    <div>
      {Fetching && <LoadingSpinner />}
      {PostLists.length === 0 && <WelcomeMsg />}
      {PostLists.map((list) => (
        <Post MappedList={list} />
      ))}
    </div>
  );
};

export default PostList;
