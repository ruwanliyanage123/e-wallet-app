import { useState } from "react";

export default function StockModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ name: "", ticker: "", shares: "", price: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name: form.ticker,
            details: `${form.name} (${form.ticker}) - ${form.shares} shares`,
            value: Number(form.shares) * Number(form.price),
        });
        onClose();
    };

    return (
        <Modal title="Add Stock" onClose={onClose} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Company Name" value={form.name} onChange={handleChange} required />
            <input type="text" name="ticker" placeholder="Ticker Symbol (AAPL)" value={form.ticker} onChange={handleChange} required />
            <input type="number" name="shares" placeholder="Number of Shares" value={form.shares} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price per Share" value={form.price} onChange={handleChange} required />
        </Modal>
    );
}

// ✅ Reusable wrapper
function Modal({ title, children, onClose, onSubmit }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-96 shadow-md">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    {children}
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
