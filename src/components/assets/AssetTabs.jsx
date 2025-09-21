import { useState } from "react";
import AssetTable from "./AssetTable";
import StockModal from "./modals/StockModal";
import BondModal from "./modals/BondModal";
import EtfModal from "./modals/EtfModal";
import RealEstateModal from "./modals/RealEstateModal";
import CommodityModal from "./modals/CommodityModal";
import CryptoModal from "./modals/CryptoModal";
import CashModal from "./modals/CashModal";

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

    // keep assets separately per category
    const [assets, setAssets] = useState({
        Stocks: [],
        Bonds: [],
        "Mutual Funds / ETFs": [],
        "Real Estate / REITs": [],
        Commodities: [],
        Crypto: [],
        Cash: [],
    });

    const [modalOpen, setModalOpen] = useState(false);

    const addAsset = (tab, asset) => {
        setAssets({
            ...assets,
            [tab]: [...assets[tab], asset],
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

        switch (activeTab) {
            case "Stocks":
                return <StockModal onClose={() => setModalOpen(false)} onAdd={(a) => addAsset("Stocks", a)} />;
            case "Bonds":
                return <BondModal onClose={() => setModalOpen(false)} onAdd={(a) => addAsset("Bonds", a)} />;
            case "Mutual Funds / ETFs":
                return <EtfModal onClose={() => setModalOpen(false)} onAdd={(a) => addAsset("Mutual Funds / ETFs", a)} />;
            case "Real Estate / REITs":
                return <RealEstateModal onClose={() => setModalOpen(false)} onAdd={(a) => addAsset("Real Estate / REITs", a)} />;
            case "Commodities":
                return <CommodityModal onClose={() => setModalOpen(false)} onAdd={(a) => addAsset("Commodities", a)} />;
            case "Crypto":
                return <CryptoModal onClose={() => setModalOpen(false)} onAdd={(a) => addAsset("Crypto", a)} />;
            case "Cash":
                return <CashModal onClose={() => setModalOpen(false)} onAdd={(a) => addAsset("Cash", a)} />;
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
                            activeTab === tab ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
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
                    assets={assets[activeTab]}
                    onDelete={(idx) => deleteAsset(activeTab, idx)}
                />
            </div>

            {/* Type-specific modal */}
            {renderModal()}
        </div>
    );
}
