import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function AssetPieChart({ assets }) {
    if (!assets || assets.length === 0) {
        return <p className="mt-6 text-gray-500">No asset data available</p>;
    }

    // Map assets safely
    const data = assets.map((a) => ({
        name: a.type || a.category?.name || a.symbol || "Unknown",
        value: a.value || 0,
    }));

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#D65DB1"];

    return (
        <div className="w-full h-64 mt-6 bg-white rounded shadow p-4">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
