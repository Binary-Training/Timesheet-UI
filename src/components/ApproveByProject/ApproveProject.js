import { Link } from "react-router-dom";

const ApproveProject = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/table">Home</Link>
        </li>
        <li>
          <Link to="/approve"> Approve Project</Link>
        </li>
        <li>
          <Link to="/details">Project Details</Link>
        </li>
        <li>
        <Link to="/weekly">Weekly</Link>
      </li>
      </ul>
    </>
  );
};

export default ApproveProject;
