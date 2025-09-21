import { useState } from "react";
import Modal from "./ModalWrapper";

const inputClass =
    "w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none";

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
            <input className={inputClass} type="text" name="name" placeholder="Company Name" value={form.name} onChange={handleChange} required />
            <input className={inputClass} type="text" name="ticker" placeholder="Ticker Symbol (AAPL)" value={form.ticker} onChange={handleChange} required />
            <input className={inputClass} type="number" name="shares" placeholder="Number of Shares" value={form.shares} onChange={handleChange} required />
            <input className={inputClass} type="number" name="price" placeholder="Price per Share" value={form.price} onChange={handleChange} required />
        </Modal>
    );
}
