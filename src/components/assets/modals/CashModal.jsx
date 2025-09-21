import { useState } from "react";
import Modal from "./ModalWrapper";

const inputClass =
    "w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none";

export default function CashModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ type: "Savings", amount: "", rate: "" });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name: form.type,
            details: form.rate ? `Rate: ${form.rate}%` : "Cash Holding",
            value: Number(form.amount),
        });
        onClose();
    };

    return (
        <Modal title="Add Cash / Cash Equivalent" onClose={onClose} onSubmit={handleSubmit}>
            <select className={inputClass} name="type" value={form.type} onChange={handleChange}>
                <option>Savings</option>
                <option>Fixed Deposit</option>
                <option>Treasury Bill</option>
            </select>
            <input className={inputClass} type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
            <input className={inputClass} type="number" name="rate" placeholder="Interest Rate (%)" value={form.rate} onChange={handleChange} />
        </Modal>
    );
}
