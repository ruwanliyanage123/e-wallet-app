import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";
import { isLoggedIn } from "./utils/auth";

// ✅ Wrapper for protected routes
function PrivateRoute({ children }) {
    return isLoggedIn() ? children : <Navigate to="/login" />;
}

function App() {
    const [page, setPage] = useState("Dashboard");

    return (
        <Router>
            <Routes>
                {/* Public Pages */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Dashboard Layout */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
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
                                <Footer />
                            </div>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
