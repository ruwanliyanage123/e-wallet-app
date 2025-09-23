import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0", "#E91E63", "#00BCD4", "#FFC107"];

export default function AssetPieChart({ assets = [] }) {
    // Compute value safely
    const data = assets.map((a) => {
        const sharePrice = a.meta?.sharePrice ?? 10;
        const amount = a.meta?.amount ?? 10;
        const value = sharePrice * amount;

        return {
            name: a.name,
            value,
        };
    });

    return (
        <div className="w-full h-80 my-6 bg-white p-4 rounded-lg shadow">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        fill="#8884d8"
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
