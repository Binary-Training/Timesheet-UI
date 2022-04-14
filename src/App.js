import './App.css';
import ApproveByReject from './Components/Reject/ApproveByReject';
import RegisterTimesheet from './Components/Reject/RegisterTimesheet';
import TimesheetDetail from './Components/Reject/TimesheetDetail';
import Header from './Components/Reject/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/ApproveByReject" element={<ApproveByReject />} />
        <Route path="/RegisterTimesheet" element={<RegisterTimesheet />} />
        <Route path="/TimesheetDetail" element={<TimesheetDetail />} />
      </Routes>
    </div>


  );
}

export default App;
