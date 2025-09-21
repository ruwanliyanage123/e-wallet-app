export default function Navbar() {
    return (
        <nav className="bg-blue-600 shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">e-wallet</h1>
            <div className="space-x-4">
                <button className="px-4 py-2 border border-slate-300 text-slate-800 font-medium rounded-lg hover:bg-slate-100 transition">
                    Logout
                </button>
            </div>
        </nav>
    );
}
