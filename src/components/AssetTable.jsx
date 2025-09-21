export default function AssetTable({ assets = [] }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <h2 className="text-lg font-bold mb-4">Assets</h2>
            {assets.length === 0 ? (
                <p className="text-gray-500">No assets found. Add one to get started.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3">Asset</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Value</th>
                        <th className="p-3">% Allocation</th>
                        <th className="p-3">Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {assets.map((asset, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="p-3">{asset.name}</td>
                            <td className="p-3">{asset.type}</td>
                            <td className="p-3">${asset.value}</td>
                            <td className="p-3">{asset.allocation}</td>
                            <td
                                className={`p-3 ${
                                    asset.change.startsWith("+") ? "text-green-600" : "text-red-600"
                                }`}
                            >
                                {asset.change}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
