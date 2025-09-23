export default function AssetTable({ assets = [], onDelete }) {
    return (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
            <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Symbol</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Currency</th>
                <th className="px-4 py-2 border">Share Price</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Value</th>
                <th className="px-4 py-2 border">Actions</th>
            </tr>
            </thead>
            <tbody>
            {assets.map((a, idx) => {
                const sharePrice = a.meta?.sharePrice ?? 10;
                const amount = a.meta?.amount ?? 10;
                const value = sharePrice * amount;

                return (
                    <tr key={a.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border">{a.name}</td>
                        <td className="px-4 py-2 border">{a.symbol || "-"}</td>
                        <td className="px-4 py-2 border">{a.category?.name || "-"}</td>
                        <td className="px-4 py-2 border">{a.currency || "-"}</td>
                        <td className="px-4 py-2 border">
                            {sharePrice.toLocaleString(undefined, {
                                style: "currency",
                                currency: a.currency || "USD",
                            })}
                        </td>
                        <td className="px-4 py-2 border">{amount}</td>
                        <td className="px-4 py-2 border">
                            {value.toLocaleString(undefined, {
                                style: "currency",
                                currency: a.currency || "USD",
                            })}
                        </td>
                        <td className="px-4 py-2 border">
                            <button
                                onClick={() => onDelete?.(idx)}
                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
