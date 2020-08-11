import LectureList from "../components//LectureList";

const getPosts = async () => {
  const markdownFiles = require
    .context("../content/matlab", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/matlab/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default ({ posts }) => {
  return <LectureList posts={posts} />;
};

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
