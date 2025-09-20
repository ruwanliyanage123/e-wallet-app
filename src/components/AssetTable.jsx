const sampleAssets = [
    { name: "AAPL", type: "Stock", value: "$40,000", allocation: "35%", change: "+2%" },
    { name: "BTC", type: "Crypto", value: "$25,000", allocation: "22%", change: "-1%" },
    { name: "US Bonds", type: "Bond", value: "$30,000", allocation: "26%", change: "+0.5%" },
];

export default function AssetTable() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <h2 className="text-lg font-bold mb-4">Assets</h2>
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
                {sampleAssets.map((asset, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="p-3">{asset.name}</td>
                        <td className="p-3">{asset.type}</td>
                        <td className="p-3">{asset.value}</td>
                        <td className="p-3">{asset.allocation}</td>
                        <td className={`p-3 ${asset.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                            {asset.change}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
