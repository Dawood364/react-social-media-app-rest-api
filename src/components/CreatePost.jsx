import React, { useContext, useRef } from "react";
import { PostList } from "../store/store-list";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const Navigate = useNavigate();
  const { AddPost } = useContext(PostList);
  const IDElement = useRef();
  const TitleElement = useRef();
  const BodyElement = useRef();
  const ViewsElement = useRef();
  const TagsElement = useRef();
  const LikesElement = useRef();
  const DislikesElement = useRef();
  const HandleSubmit = (event) => {
    event.preventDefault();
    const User_ID = IDElement.current.value;
    const Title = TitleElement.current.value;
    const Body = BodyElement.current.value;
    const Views = ViewsElement.current.value;
    const Tags = TagsElement.current.value.split(" ");
    const Likes = LikesElement.current.value.split(" ");
    const Dislikes = DislikesElement.current.value.split(" ");
    IDElement.current.value = "";
    TitleElement.current.value = "";
    BodyElement.current.value = "";
    ViewsElement.current.value = "";
    LikesElement.current.value = "";
    DislikesElement.current.value = "";
    console.log(`veews are ${Views}`);
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: User_ID,
        title: Title,
        body: Body,
        views: 20,
        tags: Tags,
        reactions: {
          likes: Likes,
          dislikes: Dislikes,
        },
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        const completePost = {
          ...post,
          views: Views, // manually re-add views since API ignores it
        };
        AddPost(completePost);
        Navigate("/Home");
      });
  };

  return (
    <div>
      <form className="Form" onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">
            User-Id
          </label>
          <input
            ref={IDElement}
            placeholder="Enter user id"
            type="Text"
            className="form-control"
            id="User-Id"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={TitleElement}
            placeholder="How are you Feeling Today ?"
            type="Text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Body" className="form-label">
            Body
          </label>
          <textarea
            ref={BodyElement}
            rows={4}
            placeholder=" Enter Description of post"
            type="Text"
            className="form-control"
            id="Body"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Reactions" className="form-label">
            views
          </label>
          <input
            ref={ViewsElement}
            placeholder="Enter Numeber of reactions"
            type="Text"
            className="form-control"
            id="Reactions"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">
            Tags
          </label>
          <input
            ref={TagsElement}
            placeholder="Enter Tags for post "
            type="Text"
            className="form-control"
            id="Tags"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">
            Enter Likes
          </label>
          <input
            ref={LikesElement}
            placeholder="Enter likes"
            type="Text"
            className="form-control"
            id="Tags"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">
            Enter dislikes
          </label>
          <input
            ref={DislikesElement}
            placeholder="Enter dislkes"
            type="Text"
            className="form-control"
            id="Tags"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
