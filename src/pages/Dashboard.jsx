import StatCard from "../components/StatCart";
import AssetTable from "../components/AssetTable";

export default function Dashboard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-3 gap-6">
                <StatCard title="Portfolio Value" value="$128,430" change="+2.3% Today" positive />
                <StatCard title="Daily P/L" value="-$1,240" change="-0.9% Today" positive={false} />
                <StatCard title="Top Asset" value="AAPL" change="40% of Portfolio" positive />
            </div>
            <AssetTable />
        </div>
    );
}
