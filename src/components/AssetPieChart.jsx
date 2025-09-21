import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function AssetPieChart({ assets = [] }) {
    if (!assets || assets.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                <h2 className="text-lg font-bold mb-4">Portfolio Allocation</h2>
                <p className="text-gray-500">No assets to display.</p>
            </div>
        );
    }

    // Convert % allocation string into number for chart
    const data = assets.map((asset, idx) => ({
        name: asset.name,
        value: Number(asset.allocation.replace("%", "")) || 0,
        color: COLORS[idx % COLORS.length],
    }));

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <h2 className="text-lg font-bold mb-4">Portfolio Allocation</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={120}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
