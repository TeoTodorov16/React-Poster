import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandeler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandeler} />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post body={post.body} author={post.author} />
        ))}
      </ul>
    </>
  );
}

export default PostsList;
