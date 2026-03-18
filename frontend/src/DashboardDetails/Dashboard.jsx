import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import StatsCards from "./StatsCards";
import RecentActivity from "./RecentActivity";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

// future pages (abhi placeholder)
import ProductDetails from "../pages/ProductDetails";
import ProfileSummary from "./pages/ProfileSummary";
function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Area */}
      <div className="flex-1 mt-20">
        {activeSection === "dashboard" && (


          <ProfileSummary />
          


        )}

        {activeSection === "student" && <ProductDetails />}
        {activeSection === "student" && <ProductDetails />}
        {activeSection === "profile" && <Profile />}
        {activeSection === "student" && <ProductDetails />}


      </div>
    </div>
  );
}

export default Dashboard;