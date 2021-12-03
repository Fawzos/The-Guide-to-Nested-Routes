import { useParams } from "react-router";
import { Link, Routes, Route } from "react-router-dom";
import { getTopic } from "./api";
import "./index.css";
import "./App.css";
import Resource from "./Resource";
function Topic() {
  const { topicId } = useParams();
  const topic = getTopic(topicId);
  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={sub.id}>{sub.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Routes>
        <Route path=":resourceId" element={<Resource />} />
      </Routes>
    </div>
  );
}
export default Topic;
