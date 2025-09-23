import { useNavigate } from "react-router-dom";
import { logout } from "../services/api";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login"); // redirect after logout
    };

    return (
        <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow">
            <h1 className="text-lg font-bold">e-wallet</h1>
            <div className="space-x-4">
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
