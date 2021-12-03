import { Link, Route, Routes } from "react-router-dom";
import { getTopics } from "./api";
import Topic from "./Topic";
import "./index.css";
import "./App.css";
function Topics() {
  const topics = getTopics();
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Routes>
        <Route path=":topicId/*" element={<Topic />} />
      </Routes>
    </div>
  );
}

export default Topics;
