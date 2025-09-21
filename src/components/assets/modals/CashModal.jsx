import { useState } from "react";
import Modal from "./ModalWrapper";

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
            <select name="type" value={form.type} onChange={handleChange}>
                <option>Savings</option>
                <option>Fixed Deposit</option>
                <option>Treasury Bill</option>
            </select>
            <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
            <input type="number" name="rate" placeholder="Interest Rate (%)" value={form.rate} onChange={handleChange} />
        </Modal>
    );
}
