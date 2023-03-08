import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  './student-2.min.css'

import Dashboard from './Pages/DashBoard/DashBoard'
import StudentList from './Pages/Students/StudentList'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Portal from './Portal/Portal'
import StudentCreate from './Pages/Students/StudentCreate'
import StudentView from './Pages/Students/StudentView'
import StudentEdit from './Pages/Students/StudentEdit'
import { StudentProvider } from './Context/UserContext';

function App() {
  return (
    /* react-router-dom package install  */
    <BrowserRouter>
      <StudentProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/portal" element={<Portal/>}>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="student-list" element={<StudentList/>} />
            <Route path="student-create" element={<StudentCreate/>} />
            <Route path="student-view/:studentid" element={<StudentView/>} />
             {/* : means dynamic variable */}
            <Route path="Student-edit/:studentid" element={<StudentEdit/>} />
          </Route>   
        </Routes>
      </StudentProvider>
    </BrowserRouter>
  );
}
export default App;
