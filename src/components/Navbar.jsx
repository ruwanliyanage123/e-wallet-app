export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">E Wallet</h1>
            <div className="space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Add Asset
                </button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                    Logout
                </button>
            </div>
        </nav>
    );
}
