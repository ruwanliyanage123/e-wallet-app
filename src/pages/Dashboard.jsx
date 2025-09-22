import StatCard from "../components/StatCart";
import AssetTable from "../components/assets/AssetTable";
import AssetPieChart from "../components/AssetPieChart";

export default function Dashboard() {
    // 🔹 Dummy data
    const assets = [
        { name: "AAPL", type: "Stock", value: 60000, allocation: "60%", change: "+2%" },
        { name: "BTC", type: "Crypto", value: 15000, allocation: "15%", change: "-3%" },
        { name: "US Bonds", type: "Bond", value: 15000, allocation: "15%", change: "+0.5%" },
        { name: "Cash", type: "Cash", value: 10000, allocation: "10%", change: "0%" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <StatCard title="Portfolio Value" value="$118,000" change="+3.2% Today" positive />
                <StatCard title="Daily P/L" value="+$2,430" change="+2.1% Today" positive />
                <StatCard title="Top Asset" value="AAPL" change="35% of Portfolio" positive />
            </div>

            {/* Pie Chart */}
            <AssetPieChart assets={assets} />

            {/* Assets Table */}
            <AssetTable assets={assets} />
        </div>
    );
}
