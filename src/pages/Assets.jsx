import { useEffect, useState } from "react";
import AssetTabs from "../components/assets/AssetTabs";
import { getAssets } from "../services/api";

export default function Assets() {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAssets()
            .then(setAssets)
            .catch((err) => console.error("Error fetching assets:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="p-6">Loading assets...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Assets</h1>
            <AssetTabs assets={assets} />
        </div>
    );
}
