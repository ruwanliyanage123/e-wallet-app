import { useState, useEffect } from "react";
import { createAsset, getCategories } from "../../../services/api";

export default function StockModal({ onClose, onAdd }) {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [sharePrice, setSharePrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("USD");
    const [categoryId, setCategoryId] = useState(null);

    // Load "stocks" category ID from backend
    useEffect(() => {
        async function loadCategories() {
            const cats = await getCategories();
            const stockCat = cats.find((c) => c.slug === "stocks");
            if (stockCat) setCategoryId(stockCat.id);
        }
        loadCategories();
    }, []);

    const handleSave = async () => {
        try {
            const newAsset = await createAsset({
                name,
                symbol,
                sharePrice: Number(sharePrice),
                amount: Number(amount),
                currency,
                categoryId,
            });
            onAdd(newAsset);
            onClose();
        } catch (err) {
            console.error("Failed to save asset:", err);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Add Stock</h2>

                <input
                    type="text"
                    placeholder="Company Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <input
                    type="text"
                    placeholder="Symbol"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <input
                    type="number"
                    placeholder="Share Price"
                    value={sharePrice}
                    onChange={(e) => setSharePrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border rounded mb-3"
                />

                <div className="flex justify-end space-x-3">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
