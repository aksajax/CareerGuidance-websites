import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <>
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />
 {/* 🌐 Animated Grid Background */}
      <div className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      {/* 💚 Glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px]" />

      <div className="flex-1 flex flex-col mt-24">
        <Topbar />
        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
    </>
  );
}

export default DashboardLayout;
