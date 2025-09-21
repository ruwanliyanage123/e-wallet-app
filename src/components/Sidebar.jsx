export default function Sidebar({ setPage }) {
    return (
        <aside className="w-64 h-full shadow-lg bg-blue-500 text-white">
            <div className="p-6">
                <h2 className="text-lg font-bold mb-6">Navigation</h2>
                <ul className="space-y-3">
                    {["Dashboard", "Assets", "Transactions", "Reports"].map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setPage(item)}
                                className="w-full text-left px-4 py-2 rounded-lg font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
