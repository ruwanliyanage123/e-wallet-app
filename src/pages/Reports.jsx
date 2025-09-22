import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Reports() {
    const data = [
        { name: "Stocks", value: 50 },
        { name: "Crypto", value: 25 },
        { name: "Bonds", value: 15 },
        { name: "Cash", value: 10 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Reports</h1>
            <div className="flex justify-center">
                <PieChart width={400} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
}
