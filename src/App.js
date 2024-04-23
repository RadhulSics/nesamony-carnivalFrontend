import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "remixicon/fonts/remixicon.css";
import './App.css';
import CoordinatorLogin from './Components/CoordinatorLogin';
import Footer from './Components/Footer';
import StudentsLogin from './Components/StudentsLogin';
import Home from './Components/Home';
import AboutCall from './Components/AboutCall';
import StudentsSignup from './Components/StudentsSignup';
import CoordinatorSignup from './Components/CoordinatorSignup';

import AdminHome from './Components/AdminHome';
import AdminCoordinator from './Components/AdminCoordinator';

import AdminAddCoordinator from './Components/AdminAddCoordinator';
import StudentProfile from './Components/StudentProfile';
import AdminLogin from './Components/AdminLogin';
import StudentHome from './Components/StudentHome';

import StudentEditProf from './Components/StudentEditProf';
import CoordinatorForgotPswd from './Components/CoordinatorForgotPswd';
import CoordinatorHome from './Components/CoordinatorHome';
import CoordinatorProfile from './Components/CoordinatorProfile';
import CoordinatorEditProfile from './Components/CoordinatorEditProfile';
import AudienceLogin from './Components/AudienceLogin';
import AudienceSignin from './Components/AudienceSignin';
import AudienceProfile from './Components/AudienceProfile';
import AudienceEditProfile from './Components/AudienceEditProfile';
import AudienceForgotPwd from './Components/AudienceForgotPwd';
import AdminAudience from './Components/AdminAudience';
import VolunteerLogin from './Components/VolunteerLogin';
import VolunteerSignin from './Components/VolunteerSignin';
import VolenteerForgotPwd from './Components/VolenteerForgotPwd';
import VolunteerHome from './Components/VolunteerHome';
import VolunteerProfile from './Components/VolunteerProfile';
import VolunteerEditProf from './Components/VolunteerEditProf';
import AdminVolunteers from './Components/AdminVolunteers';
import AdminVolunteerReq from './Components/AdminVolunteerReq';

import AudienceHome from './Components/AudienceHome';

import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';

import StudentForgotPass from './Components/StudentForgotPass';

function App() {

  //local
  const url='http://localhost:4014'

  //server
  // const url= "http://hybrid.srishticampus.in:4019/"

  return (
    <BrowserRouter basename='/carnival' >
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutCall/>} />
        <Route path='/blog' element={<Blog url={url} />} />
        <Route path='/blog_detail/:id' element={<BlogDetail url={url} />} />
        <Route path='/student_login' element={<StudentsLogin/>} />
        <Route path='/student_signup' element={<StudentsSignup/>} />
        <Route path='/student_profile' element={<StudentProfile/>} />
        <Route path='/student_edit_profile' element={<StudentEditProf/>} />
        <Route path='/student_forgot_password' element={<StudentForgotPass/>} />
        <Route path='/student_home' element={<StudentHome/>} />
        
        <Route path='/coordinator_login' element={<CoordinatorLogin/>} />
        <Route path='/coordinator_signup' element={<CoordinatorSignup/>} />
        <Route path='/coordinator_forgotpwd' element={<CoordinatorForgotPswd/>} />
        <Route path='/coordinator_home' element={<CoordinatorHome/>} />
        <Route path='/coordinator_profile' element={<CoordinatorProfile/>} />
        <Route path='/coordinator_edit_profile' element={<CoordinatorEditProfile/>} />
        
        <Route path='/audience_login' element={<AudienceLogin/>} />
        <Route path='/audience_signup' element={<AudienceSignin/>} />
        <Route path='/audience_home' element={<AudienceHome/>} />  
        <Route path='/audience_profile' element={<AudienceProfile/>} />
        <Route path='/audience_edit_profile' element={<AudienceEditProfile/>} />
        <Route path='/audience_forgotpwd' element={<AudienceForgotPwd/>} />

        <Route path='/volunteer_login' element={<VolunteerLogin/>} />
        <Route path='/volunteer_signup' element={<VolunteerSignin/>} />
        <Route path='/volunteer_forgotpwd' element={<VolenteerForgotPwd/>} />
        <Route path='/volunteer_home' element={<VolunteerHome/>} />
        <Route path='/volunteer_profile' element={<VolunteerProfile/>} />
        <Route path='/volunteer_edit_profile' element={<VolunteerEditProf/>} />

        <Route path='/admin_home' element={<AdminHome/>} />
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/admin_coordinator' element={<AdminCoordinator/>} />
        <Route path='/admin_volunteers' element={<AdminVolunteers/>} />
        <Route path='/admin_volunteers_req' element={<AdminVolunteerReq/>} />
        <Route path='/admin_audience' element={<AdminAudience/>} />
        <Route path='/admin_coordinator_req' element={<AdminAddCoordinator/>} />
        
      </Routes>
      
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
