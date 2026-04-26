import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import StatsCards from "./StatsCards";
import RecentActivity from "./RecentActivity";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

// future pages (abhi placeholder)
import ProductDetails from "../pages/ProductDetails";
import ProfileSummary from "./pages/ProfileSummary";
import Apps from "../AIRoadmap/apps";
import ProfectionHome from "../components/MindLer/profectionHome";
import ExploreColleges from "../components/MindLer/ExploreColleges";
import CounsellorList from "../components/MindLer/CounsellorList";
import QuizPreviewSection from "../Demo/QuizPreviewSection";
import ResumeFeatureSection from "./pages/ResumeFeatureSection";
import Indexmain from "../Notes/indexmain";
import Demo from "../Notes/Demo";
// import Notespage from "../Notes/CourseViewers/Notespage";
function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="min-h-screen bg-black text-white">
      
      <ProfectionHome />
      <ExploreColleges />
      <CounsellorList />
      <QuizPreviewSection />
      <ResumeFeatureSection />
      <Indexmain />
      <Demo />
      {/* <Notespage /> */}
      
      {/* Sidebar */}
      {/* <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      
      <div className="flex-1 mt-20">
        {activeSection === "dashboard" && <ProfileSummary />}
        {activeSection === "student" && <ProductDetails />}
        {activeSection === "profile" && <Profile />}
        {activeSection === "roadmap" && <Apps />}
      </div> */}
    </div>
  );
}

export default Dashboard;
