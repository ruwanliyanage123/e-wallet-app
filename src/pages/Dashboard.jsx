import { useEffect, useState } from "react";
import StatCard from "../components/StatCart";
import AssetTable from "../components/assets/AssetTable";
import AssetPieChart from "../components/AssetPieChart";
import { getAssets, getPortfolios } from "../services/api";

export default function Dashboard() {
    const [assets, setAssets] = useState([]);
    const [portfolioValue, setPortfolioValue] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [fetchedAssets, portfolios] = await Promise.all([
                    getAssets(),
                    getPortfolios(),
                ]);

                setAssets(fetchedAssets);

                // Example: sum up values (if your backend doesn’t provide, mock it for now)
                const totalValue = portfolios.reduce(
                    (sum, p) => sum + (p.totalValue || 0),
                    0
                );
                setPortfolioValue(totalValue);
            } catch (err) {
                console.error("Error loading dashboard:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <p className="p-6">Loading dashboard...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Portfolio Value"
                    value={`$${portfolioValue.toLocaleString()}`}
                    change="+0.0% Today"
                    positive
                />
                <StatCard
                    title="Daily P/L"
                    value="-$0"
                    change="Flat Today"
                    positive={false}
                />
                <StatCard
                    title="Top Asset"
                    value={assets.length > 0 ? assets[0].symbol : "-"}
                    change="Most allocated"
                    positive
                />
            </div>

            {/* Pie Chart */}
            <AssetPieChart assets={assets} />

            {/* Assets Table */}
            <AssetTable assets={assets} />
        </div>
    );
}
