import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";

function App() {
  const [page, setPage] = useState("Dashboard");

  return (
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar setPage={setPage} />
          <main className="flex-1 overflow-y-auto bg-gray-50">
            {page === "Dashboard" && <Dashboard />}
            {page === "Assets" && <Assets />}
            {page === "Transactions" && <Transactions />}
            {page === "Reports" && <Reports />}
          </main>
        </div>
      </div>
  );
}

export default App;
