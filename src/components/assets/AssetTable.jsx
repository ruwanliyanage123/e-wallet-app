export default function AssetTable({ assets }) {
    return (
        <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-left">
                    <th className="p-3">Name</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Value</th>
                    <th className="p-3">Allocation</th>
                    <th className="p-3">Change</th>
                </tr>
                </thead>
                <tbody>
                {assets.map((asset, idx) => (
                    <tr key={idx} className="border-t hover:bg-gray-50">
                        <td className="p-3 font-medium">{asset.name}</td>
                        <td className="p-3">{asset.type}</td>
                        <td className="p-3">${asset.value.toLocaleString()}</td>
                        <td className="p-3">{asset.allocation}</td>
                        <td
                            className={`p-3 font-semibold ${
                                asset.change.startsWith("-") ? "text-red-600" : "text-green-600"
                            }`}
                        >
                            {asset.change}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
