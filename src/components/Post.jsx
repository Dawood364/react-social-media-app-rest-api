import React, { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { PostList } from "../store/store-list";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
const Post = ({ MappedList }) => {
  const { DeletePost } = useContext(PostList);
  // const [value, setvalue] = useState(true);
  const [reaction, setreaction] = useState(null);

  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              DeletePost(MappedList.id);
            }}
          >
            <RiDeleteBin6Line />
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{MappedList.title}</h5>
          <p className="card-text">{MappedList.body}</p>

          {MappedList.tags.map((tag) => (
            <span className="badge text-bg-primary hastag">{tag}</span>
          ))}
          <div className="alert alert-primary alert" role="alert">
            <GrView /> {` ${MappedList.views} `}
          </div>
          {/* <AiOutlineLike className="like " style={{ color: "blue" }} /> */}
          <div style={{ fontSize: "32px", display: "flex", gap: "20px" }}>
            {/* Like Button */}
            <FaThumbsUp
              onClick={() => setreaction(reaction === "blue" ? null : "blue")}
              style={{ color: reaction === "blue" ? "blue" : "grey" }}
            />
            <h6>{MappedList.reactions.likes}</h6>

            <FaThumbsDown
              onClick={() => {
                setreaction(reaction === "dislike" ? null : "dislike");
              }}
              style={{
                color: reaction === "dislike" ? "blue" : "grey",
              }}
            />
            <h6>{MappedList.reactions.dislikes}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
