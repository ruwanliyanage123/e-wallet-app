export default function Sidebar({ setPage }) {
    return (
        <aside className="w-64 bg-white shadow-md p-6">
            <ul className="space-y-4">
                {["Dashboard", "Assets", "Transactions", "Reports"].map((item) => (
                    <li key={item}>
                        <button
                            onClick={() => setPage(item)}
                            className="w-full text-left px-2 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 font-medium"
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
