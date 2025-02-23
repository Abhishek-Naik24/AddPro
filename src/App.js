import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Landing from "./components/shared/Landing";
import Dashboard from "./components/dasboard/Dashboard";
import Employees from "./components/masters/Employees";
import Clients from "./components/masters/Clients";
import Radios from "./components/masters/Radios";
import Holidays from "./components/masters/Holidays";
import TaxPlannings from "./components/masters/TaxPlannings";
import Newspapers from "./components/masters/Newspapers";
import UserProfile from "./components/masters/UserProfile";
import RoList from "./components/p-media/RoList";
import { RoMaster } from "./components/p-media/RoMaster";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Landing />}>
            <Route path='' element={<Dashboard />}></Route>
            <Route path='dashboard' element={<Dashboard />}></Route>
            <Route path='master/employees' element={<Employees />}></Route>
            <Route path='master/clients' element={<Clients />}></Route>
            <Route path='master/radios' element={<Radios />}></Route>
            <Route path='master/newspapers' element={<Newspapers />}></Route>
            <Route path='master/holidays' element={<Holidays />}></Route>
            <Route path='master/tax_plannings' element={<TaxPlannings />}></Route>
            <Route path='user-profile' element={<UserProfile />}></Route>
            <Route path='p-media/ro-list' element={<RoList />}></Route>
            <Route path='p-media/ro-list/ro-master' element={<RoMaster />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
