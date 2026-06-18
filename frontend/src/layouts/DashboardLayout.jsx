import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/"); // Explicitly ensure the view frame resets back to the landing page
  };

  return (
    <div className="flex min-h-screen bg-[#0B0B0B] text-[#F5F5F5] font-sans">
      {/* Sidebar Workspace Navigation */}
      <aside className="w-64 border-r border-[#232323] bg-[#0B0B0B] flex flex-col justify-between p-6">
        <div className="space-y-8">
          <div className="font-bold tracking-wider text-sm border-b border-[#232323] pb-4">
            FORGE HUB
          </div>
          <nav className="flex flex-col gap-4 text-sm text-zinc-400">
            <Link to="/dashboard" className="hover:text-[#F5F5F5] transition-colors">Workspace</Link>
            <Link to="/projects" className="hover:text-[#F5F5F5] transition-colors">Projects</Link>
            <Link to="/tasks" className="hover:text-[#F5F5F5] transition-colors">Tasks</Link>
            <Link to="/team-analysis" className="hover:text-[#F5F5F5] transition-colors">Team Analysis</Link>
            <Link to="/ai-reports" className="hover:text-[#F5F5F5] transition-colors">AI Reports</Link>
          </nav>
        </div>
        
        <div className="border-t border-[#232323] pt-4">
          <div className="text-xs text-zinc-400 mb-2">@{user?.username || "user"}</div>
          <button onClick={handleSignOut} className="text-xs text-[#D97706] hover:underline text-left w-full">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Feature Content Frame */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}