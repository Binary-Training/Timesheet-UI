import { Routes, Route } from "react-router-dom";
import ApproveProject from "../components/ApproveByProject/ApproveProject";
import MainTable from "../components/Table";
import ApproveByProject from '../components/pages/ApproveByProject'
import ProjectDetails from '../components/pages/ProjectDetails';
import WeeklyDetails from "../components/pages/WeeklyDetails";
const Home = () => {
    return(
        <>
        <ApproveProject />
            <Routes>
                <Route path="/table" element={<MainTable />} />
                <Route path="/approve" element={<ApproveByProject />} />
                <Route path="/details" element={<ProjectDetails /> } />
                <Route path="/weekly" element={<WeeklyDetails />} />
            </Routes>
        </>
    )
}

export default Home;