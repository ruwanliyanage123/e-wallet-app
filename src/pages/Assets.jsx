import { useState } from "react";
import AssetTable from "../components/AssetTable";
import AddAssetModal from "../components/AddAssetModal";

export default function Assets() {
    const [assets, setAssets] = useState([
        { name: "AAPL", type: "Stock", value: 40000, allocation: "35%", change: "+2%" },
        { name: "BTC", type: "Crypto", value: 25000, allocation: "22%", change: "-1%" },
    ]);

    const [modalOpen, setModalOpen] = useState(false);

    const addAsset = (asset) => {
        // Convert value to number & sanitize allocation
        const formattedAsset = {
            ...asset,
            value: Number(asset.value),
            allocation: asset.allocation || "0%",
            change: asset.change || "0%",
        };
        setAssets([...assets, formattedAsset]);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Assets</h1>
                <button
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    + Add Asset
                </button>
            </div>

            <AssetTable assets={assets} />

            <AddAssetModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onAdd={addAsset}
            />
        </div>
    );
}
