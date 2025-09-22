import { useEffect, useState } from "react";
import StatCard from "../components/StatCart";
import AssetTable from "../components/assets/AssetTable";
import AssetPieChart from "../components/AssetPieChart";
import { getPortfolios, getAssets } from "../services/api";

export default function Dashboard() {
    const [assets, setAssets] = useState([]);
    const [portfolioValue, setPortfolioValue] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [portfolios, allAssets] = await Promise.all([
                    getPortfolios(),
                    getAssets(),
                ]);

                // 🔹 Example: assume each portfolio has holdings with quantity & avgPrice
                const portfolio = portfolios[0]; // first portfolio
                if (portfolio?.holdings?.length > 0) {
                    const mappedAssets = portfolio.holdings.map((h) => {
                        const asset = allAssets.find((a) => a.id === h.assetId);
                        const value = h.quantity * h.avgPrice;

                        return {
                            id: h.assetId,
                            name: asset?.name || "Unknown",
                            symbol: asset?.symbol || "-",
                            type: asset?.category?.name || "Asset",
                            value,
                            allocation: "0%", // calculate later
                            change: "N/A",
                        };
                    });

                    // 🔹 Calculate total portfolio value
                    const totalValue = mappedAssets.reduce((sum, a) => sum + a.value, 0);

                    // 🔹 Calculate allocation %
                    const finalAssets = mappedAssets.map((a) => ({
                        ...a,
                        allocation: `${((a.value / totalValue) * 100).toFixed(1)}%`,
                    }));

                    setAssets(finalAssets);
                    setPortfolioValue(totalValue);
                } else {
                    setAssets([]);
                    setPortfolioValue(0);
                }
            } catch (err) {
                console.error("Error loading dashboard:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <p className="p-6">Loading dashboard...</p>;

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
