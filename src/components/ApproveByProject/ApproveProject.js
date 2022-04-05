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
          <Link to="/resource">Approve Resource</Link>
        </li>
        <li>
          <Link to="/task">Approve Reject</Link>
        </li>
      </ul>
    </>
  );
};

export default ApproveProject;
