import Lecture from "./Lecture";

export default ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Lecture
            key={post.slug}
            title={post.attributes.title}
            src={post.attributes.videoEmbedLink}
            notes={post.attributes.notes}
          />
        );
      })}
    </div>
  );
};
