import { useState } from "react";
import { createAsset } from "../../../services/api";

export default function StockModal({ onClose, onAdd, categoryId }) {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [sharePrice, setSharePrice] = useState("");
    const [amount, setAmount] = useState("");

    const handleSave = async () => {
        const newAsset = await createAsset({
            name,
            symbol,
            categoryId,   // ✅ string cuid
            currency,
            sharePrice: parseFloat(sharePrice),
            amount: parseFloat(amount),
        });
        onAdd(newAsset);
        onClose();
    };

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Add Stock</h2>
            <input
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
                type="text"
                placeholder="Symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
                type="number"
                placeholder="Share Price"
                value={sharePrice}
                onChange={(e) => setSharePrice(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded"
            />
            <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Save
            </button>
            <button
                onClick={onClose}
                className="ml-2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
                Cancel
            </button>
        </div>
    );
}
