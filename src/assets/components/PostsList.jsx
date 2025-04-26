import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Teo" body="React is still lit!" />
        <Post author="Mcgreogr" body="Know yourselves!" />
      </ul>
    </>
  );
}

export default PostsList;
