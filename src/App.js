import './App.css';
import ApproveByReject from './Components/Reject/Pages/ApproveByReject';
import RegisterTimesheet from './Components/Reject/Pages/RegisterTimesheet';
import TimesheetDetail from './Components/Reject/Pages/TimesheetDetail';
import { Routes, Route } from 'react-router-dom';
import SideNav from './Components/SideNav';

function App() {
  return (
    <div>
      <SideNav />
      <Routes>
        <Route path="/ApproveByReject" element={<ApproveByReject />} />
        <Route path="/RegisterTimesheet" element={<RegisterTimesheet />} />
        <Route path="/TimesheetDetail" element={<TimesheetDetail />} />
      </Routes>
    </div>


  );
}

export default App;
