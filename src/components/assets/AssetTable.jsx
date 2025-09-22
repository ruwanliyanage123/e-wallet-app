export default function AssetTable({ assets }) {
    if (!assets || assets.length === 0) {
        return <p className="mt-6 text-gray-500">No assets yet.</p>;
    }

    return (
        <div className="mt-6 bg-white rounded shadow overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="bg-gray-100">
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Symbol</th>
                    <th className="p-3 border">Category</th>
                    <th className="p-3 border">Share Price</th>
                    <th className="p-3 border">Amount</th>
                    <th className="p-3 border">Value</th>
                </tr>
                </thead>
                <tbody>
                {assets.map((a) => {
                    const value =
                        a.sharePrice && a.amount
                            ? parseFloat(a.sharePrice) * parseFloat(a.amount)
                            : 0;

                    return (
                        <tr key={a.id} className="hover:bg-gray-50">
                            <td className="p-3 border">{a.name}</td>
                            <td className="p-3 border">{a.symbol}</td>
                            <td className="p-3 border">{a.category?.name || "-"}</td>
                            <td className="p-3 border">
                                {a.sharePrice ? `$${a.sharePrice}` : "-"}
                            </td>
                            <td className="p-3 border">{a.amount ?? "-"}</td>
                            <td className="p-3 border font-semibold">
                                {value > 0 ? `$${value.toFixed(2)}` : "-"}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
