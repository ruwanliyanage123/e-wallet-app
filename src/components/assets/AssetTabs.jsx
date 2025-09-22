import { useEffect, useState } from "react";
import AssetTable from "./AssetTable";
import StockModal from "./modals/StockModal";
import BondModal from "./modals/BondModal";
import EtfModal from "./modals/EtfModal";
import RealEstateModal from "./modals/RealEstateModal";
import CommodityModal from "./modals/CommodityModal";
import CryptoModal from "./modals/CryptoModal";
import CashModal from "./modals/CashModal";
import { getAssets, getCategories } from "../../services/api";

const TABS = [
    "Stocks",
    "Bonds",
    "Mutual Funds / ETFs",
    "Real Estate / REITs",
    "Commodities",
    "Crypto",
    "Cash",
];

export default function AssetTabs() {
    const [activeTab, setActiveTab] = useState("Stocks");
    const [assets, setAssets] = useState({});
    const [categories, setCategories] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    // ✅ Load categories + assets on mount
    useEffect(() => {
        async function load() {
            try {
                const cats = await getCategories();
                setCategories(cats);

                const fetched = await getAssets();

                // group assets by category name
                const grouped = {};
                TABS.forEach((t) => (grouped[t] = []));
                fetched.forEach((a) => {
                    const catName =
                        cats.find((c) => c.id === a.categoryId)?.name || "Uncategorized";
                    if (!grouped[catName]) grouped[catName] = [];
                    grouped[catName].push(a);
                });

                setAssets(grouped);
            } catch (err) {
                console.error("Failed to fetch data:", err);
            }
        }

        load();
    }, []);

    // Helper: get categoryId by tab name
    const getCategoryId = (tabName) => {
        const cat = categories.find((c) => c.name === tabName);
        return cat?.id;
    };

    const addAsset = (tab, asset) => {
        setAssets({
            ...assets,
            [tab]: [...(assets[tab] || []), asset],
        });
    };

    const deleteAsset = (tab, index) => {
        setAssets({
            ...assets,
            [tab]: assets[tab].filter((_, i) => i !== index),
        });
    };

    const renderModal = () => {
        if (!modalOpen) return null;

        const categoryId = getCategoryId(activeTab); // ✅ pass down

        switch (activeTab) {
            case "Stocks":
                return (
                    <StockModal
                        onClose={() => setModalOpen(false)}
                        onAdd={(a) => addAsset("Stocks", a)}
                        categoryId={categoryId}
                    />
                );
            case "Bonds":
                return (
                    <BondModal
                        onClose={() => setModalOpen(false)}
                        onAdd={(a) => addAsset("Bonds", a)}
                        categoryId={categoryId}
                    />
                );
            case "Mutual Funds / ETFs":
                return (
                    <EtfModal
                        onClose={() => setModalOpen(false)}
                        onAdd={(a) => addAsset("Mutual Funds / ETFs", a)}
                        categoryId={categoryId}
                    />
                );
            case "Real Estate / REITs":
                return (
                    <RealEstateModal
                        onClose={() => setModalOpen(false)}
                        onAdd={(a) => addAsset("Real Estate / REITs", a)}
                        categoryId={categoryId}
                    />
                );
            case "Commodities":
                return (
                    <CommodityModal
                        onClose={() => setModalOpen(false)}
                        onAdd={(a) => addAsset("Commodities", a)}
                        categoryId={categoryId}
                    />
                );
            case "Crypto":
                return (
                    <CryptoModal
                        onClose={() => setModalOpen(false)}
                        onAdd={(a) => addAsset("Crypto", a)}
                        categoryId={categoryId}
                    />
                );
            case "Cash":
                return (
                    <CashModal
                        onClose={() => setModalOpen(false)}
                        onAdd={(a) => addAsset("Cash", a)}
                        categoryId={categoryId}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Tab headers */}
            <div className="flex border-b mb-6 space-x-4">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-medium ${
                            activeTab === tab
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "text-gray-600"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Active Tab Content */}
            <div>
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold">{activeTab}</h2>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        + Add {activeTab}
                    </button>
                </div>

                <AssetTable
                    assets={assets[activeTab] || []}
                    onDelete={(idx) => deleteAsset(activeTab, idx)}
                />
            </div>

            {renderModal()}
        </div>
    );
}
