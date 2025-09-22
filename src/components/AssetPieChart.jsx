import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function AssetPieChart({ assets }) {
    const COLORS = [
        "#9846e5", // Indigo (Stocks)
        "#4e10b9", // Emerald (Bonds)
        "#3041ea", // Amber (Crypto)
        "#4494ef", // Red (Real Estate)
        "#3B82F6", // Blue (Cash)
        "#8B5CF6", // Violet
        "#22D3EE", // Cyan
    ];

    return (
        <div className="my-6 flex justify-center p-4 bg-white rounded-lg shadow">
            <PieChart width={420} height={300}>
                <Pie
                    data={assets}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90} // ✅ smaller than before
                    labelLine={false}
                    label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                    }
                >
                    {assets.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip
                    formatter={(value, name) => [
                        `$${value.toLocaleString()}`,
                        name,
                    ]}
                />
                <Legend />
            </PieChart>
        </div>
    );
}
