import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome to our content index. Head over to{" "}
        <Link to="/topics">Topics</Link> to see our catalog.
      </p>
    </>
  );
}

export default Home;
