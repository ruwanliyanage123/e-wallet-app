import StatCard from "../components/StatCart";
import AssetTable from "../components/assets/AssetTable";
import AssetPieChart from "../components/AssetPieChart";

export default function Dashboard() {
    const assets = [
        { name: "AAPL", type: "Stock", value: 40000, allocation: "35%", change: "+2%" },
        { name: "BTC", type: "Crypto", value: 25000, allocation: "22%", change: "-1%" },
        { name: "US Bonds", type: "Bond", value: 30000, allocation: "26%", change: "+0.5%" },
        { name: "Cash", type: "Cash", value: 8000, allocation: "7%", change: "0%" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {/* Top Stats */}
            <div className="grid grid-cols-3 gap-6">
                <StatCard title="Portfolio Value" value="$128,430" change="+2.3% Today" positive />
                <StatCard title="Daily P/L" value="-$1,240" change="-0.9% Today" positive={false} />
                <StatCard title="Top Asset" value="AAPL" change="40% of Portfolio" positive />
            </div>

            {/* Pie Chart */}
            <AssetPieChart assets={assets} />

            {/* Assets Table */}
            <AssetTable assets={assets} />
        </div>
    );
}
