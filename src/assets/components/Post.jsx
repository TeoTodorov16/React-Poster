const names = ["Teodor", "Mcgregor"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{chosenName}</p>
      <p>Know yourselves!</p>
    </div>
  );
}

export default Post;
