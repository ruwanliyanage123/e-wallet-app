import { useState } from "react";

export default function AddAssetModal({ isOpen, onClose, onAdd }) {
    const [form, setForm] = useState({
        name: "",
        type: "Stock",
        value: "",
        allocation: "",
        change: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // simple validation
        if (!form.name || !form.value) {
            alert("Please enter at least Asset Name and Value");
            return;
        }

        onAdd(form);
        setForm({ name: "", type: "Stock", value: "", allocation: "", change: "" });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-96 p-6">
                <h2 className="text-lg font-bold mb-4">Add Asset</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Asset Name (e.g. AAPL)"
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="w-full border p-2 rounded-lg"
                    >
                        <option>Stock</option>
                        <option>Crypto</option>
                        <option>Bond</option>
                        <option>Real Estate</option>
                        <option>Cash</option>
                    </select>
                    <input
                        type="number"
                        name="value"
                        value={form.value}
                        onChange={handleChange}
                        placeholder="Value (USD)"
                        className="w-full border p-2 rounded-lg"
                        required
                    />
                    <input
                        type="text"
                        name="allocation"
                        value={form.allocation}
                        onChange={handleChange}
                        placeholder="% Allocation"
                        className="w-full border p-2 rounded-lg"
                    />
                    <input
                        type="text"
                        name="change"
                        value={form.change}
                        onChange={handleChange}
                        placeholder="Daily Change (+2% / -1%)"
                        className="w-full border p-2 rounded-lg"
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
