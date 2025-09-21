import { useState } from "react";
import Modal from "./ModalWrapper";

const inputClass =
    "w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none";

export default function EtfModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ name: "", ticker: "", units: "", price: "" });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name: form.ticker,
            details: `${form.name} (${form.ticker}), ${form.units} units`,
            value: Number(form.units) * Number(form.price),
        });
        onClose();
    };

    return (
        <Modal title="Add Mutual Fund / ETF" onClose={onClose} onSubmit={handleSubmit}>
            <input className={inputClass} type="text" name="name" placeholder="Fund Name" value={form.name} onChange={handleChange} required />
            <input className={inputClass} type="text" name="ticker" placeholder="Ticker Symbol (SPY)" value={form.ticker} onChange={handleChange} required />
            <input className={inputClass} type="number" name="units" placeholder="Number of Units" value={form.units} onChange={handleChange} required />
            <input className={inputClass} type="number" name="price" placeholder="Price per Unit" value={form.price} onChange={handleChange} required />
        </Modal>
    );
}
