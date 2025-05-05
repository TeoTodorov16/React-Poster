import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [showModal, setShowModal] = useState(true);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHanlder(event) {
    setEnteredAuthor(event.target.value);
  }

  function modalChangeHandler() {
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        <Modal onClose={modalChangeHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHanlder}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Mcgreogr" body="Know yourselves!" />
      </ul>
    </>
  );
}

export default PostsList;
