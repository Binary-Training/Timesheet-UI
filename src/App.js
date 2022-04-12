import './App.css';
import ApproveByResource from './components/Resource/ApproveByResource';
import ResourceDetail from './components/Resource/ResourceDetail';
import ResourceWeeklyDetail from'./components/Resource/ResourceWeeklyDetail';
import Header from './components/Resource/Header';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/ApproveByResource" element={<ApproveByResource />}/>
        <Route path="/ResourceDetail" element={<ResourceDetail />}/>
        <Route path="/ResourceWeeklyDetail" element={<ResourceWeeklyDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
