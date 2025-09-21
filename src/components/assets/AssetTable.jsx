export default function AssetTable({ assets = [], onDelete }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            {assets.length === 0 ? (
                <p className="text-gray-500">No assets yet. Add one.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3">Name</th>
                        <th className="p-3">Details</th>
                        <th className="p-3">Value</th>
                        <th className="p-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {assets.map((asset, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="p-3">{asset.name}</td>
                            <td className="p-3">{asset.details}</td>
                            <td className="p-3">${asset.value}</td>
                            <td className="p-3">
                                <button className="px-2 py-1 text-sm text-green-600">Edit</button>
                                <button
                                    onClick={() => onDelete(idx)}
                                    className="ml-2 px-2 py-1 text-sm text-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
