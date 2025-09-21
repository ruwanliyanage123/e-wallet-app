import { useState } from "react";
import Modal from "./ModalWrapper";

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
            <input type="text" name="name" placeholder="Fund Name" value={form.name} onChange={handleChange} required />
            <input type="text" name="ticker" placeholder="Ticker Symbol (SPY)" value={form.ticker} onChange={handleChange} required />
            <input type="number" name="units" placeholder="Number of Units" value={form.units} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price per Unit" value={form.price} onChange={handleChange} required />
        </Modal>
    );
}
