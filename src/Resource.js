import { useParams } from "react-router";
import { getResource } from "./api";
import "./index.css";
import "./App.css";
function Resource() {
  const { topicId, resourceId } = useParams();
  const { name, id, description } = getResource({ topicId, resourceId });
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={`https://ui.dev/${id}`}>Read Post</a>
    </div>
  );
}

export default Resource;
