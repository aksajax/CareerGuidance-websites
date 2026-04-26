import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PDFChatBot from './components/PDFChatBot';
import CollegeList from './collegepage/CollegeList';
import CollegeDetails from './collegepage/CollegeDetails';
import WebsiteChat from './ChatBots/WebsiteChat';
import Trys from './pages/Trys';
import Homepage from './pages/Homepage';
import PrivateRouter from './components/PrivateRouter';
import Dashboard from './DashboardDetails/Dashboard';
import Home from './pages/Home';
import PersonalInfo from './DashboardDetails/pages/PersonalInfo';
import ResumeBuilder from './DashboardDetails/pages/ResumeBuilder';
import Resume from './DashboardDetails/pages/Resume';


import ResumeAI from './ResumeApp/Pages/Home/ResumeAI';
import ResumeState from './ResumeApp/Context/ResumeState';

import HomeRoadmap from './AIRoadmap/pages/Home';
import CourseViewRoadmap from './AIRoadmap/pages/CourseView';
import DashboardRoadmap from './AIRoadmap/pages/Dashboard';

import Apps from './AIRoadmap/apps';
import LearningCenter from './CareerQuiz/LearningCenter';
import Indexmain from './Notes/indexmain';
// import Notespage from './Notes/CourseViewers/Notespage';




function App() {
  return (
    <>
    
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/colleges" element={<CollegeList />} />
          <Route path="/college/:id" element={<CollegeDetails />} />

          <Route element={<PrivateRouter />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/chatbot" element={<PDFChatBot />} />
            <Route path="/chat" element={<WebsiteChat />} />
            <Route path="/try" element={<Trys />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/resumebuilder" element={<ResumeBuilder />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/resumes" element={<ResumeState> <ResumeAI /></ResumeState>} />
            <Route path="/careerquiz" element={<LearningCenter />} />
            <Route path="/airoadmap" element={<Indexmain />} />

            {/* <Route path="/notes" element={<Notespage />} /> */}

            <Route
          path="/dashboardRoadmap"
          element={
            
              <Apps />
            
          }
        />
        <Route path="/roadmaphome" element={<HomeRoadmap />} />
        <Route path="/course/:id" element={<CourseViewRoadmap />} />
        <Route path="/roadmapdashboard" element={<DashboardRoadmap />} />
          </Route>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;