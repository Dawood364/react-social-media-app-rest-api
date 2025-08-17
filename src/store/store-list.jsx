import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
// const DefaultValue = {
//   PostLists: [],
//   AddPost: () => {},
//   DeletePost: () => {},

// };

export const PostList = createContext();

const PostListReducer = (CurrPost, Action) => {
  let newVariable = CurrPost;
  if (Action.type === "DELETE_POST") {
    newVariable = newVariable.filter(
      (post) => post.id !== Action.payload.postid
    );
  } else if (Action.type === "fetchServerPosts") {
    newVariable = Action.payload.posts;
  } else if (Action.type === "ADD_POST") {
    newVariable = [Action.payload, ...CurrPost];
  }
  return newVariable;
};

const PostListProvider = ({ children }) => {
  const [PostLists, DispatchPostLists] = useReducer(PostListReducer, []);
  const [Fetching, SetFetching] = useState(false);
  const AddPost = (post) => {
    DispatchPostLists({
      type: "ADD_POST",
      payload: post,
    });
    console.log("hi daooda ");
  };

  const fetchServerPosts = (post) => {
    DispatchPostLists({
      type: "fetchServerPosts",
      payload: {
        posts: post,
      },
    });
  };

  const DeletePost = (postid) => {
    DispatchPostLists({
      type: "DELETE_POST",
      payload: {
        postid: postid,
      },
    });
  };
  useEffect(() => {
    SetFetching(true);
    const Controller = new AbortController();
    const Signal = Controller.signal;
    fetch("https://dummyjson.com/posts", { Signal })
      .then((res) => res.json())
      .then((data) => {
        fetchServerPosts(data.posts);
        SetFetching(false);
        console.log(data);
      });

    return () => {
      console.log("Aborted");
      Controller.abort();
    };
  }, []);

  return (
    <>
      <PostList.Provider
        value={{
          PostLists: PostLists,
          AddPost: AddPost,
          DeletePost: DeletePost,
          Fetching: Fetching,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostListProvider;
