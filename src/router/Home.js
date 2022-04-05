import { Routes, Route } from "react-router-dom";
import ApproveProject from "../components/ApproveByProject/ApproveProject";
import MainTable from "../components/Table";
import ApproveByProject from '../components/pages/ApproveByProject'
import ApproveByResource from '../components/pages/ApproveByResourse';
import ApproveByTask from '../components/pages/ApproveByTask';
const Home = () => {
    return(
        <>
        <ApproveProject />
            <Routes>
                <Route path="/table" element={<MainTable />} />
                <Route path="/approve" element={<ApproveByProject />} />
                <Route path="/resource" element={<ApproveByResource /> } />
                <Route path="/task" element={<ApproveByTask />} />
            </Routes>
        </>
    )
}

export default Home;