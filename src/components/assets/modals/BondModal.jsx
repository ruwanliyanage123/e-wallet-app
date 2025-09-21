import { useState } from "react";
import Modal from "./ModalWrapper";

export default function BondModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ issuer: "", type: "Government", amount: "", rate: "", maturity: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name: `${form.issuer} Bond`,
            details: `${form.type}, Rate: ${form.rate}%, Maturity: ${form.maturity}`,
            value: Number(form.amount),
        });
        onClose();
    };

    return (
        <Modal title="Add Bond" onClose={onClose} onSubmit={handleSubmit}>
            <input type="text" name="issuer" placeholder="Issuer (US Govt)" value={form.issuer} onChange={handleChange} required />
            <select name="type" value={form.type} onChange={handleChange}>
                <option>Government</option>
                <option>Corporate</option>
                <option>Municipal</option>
            </select>
            <input type="number" name="amount" placeholder="Investment Amount" value={form.amount} onChange={handleChange} required />
            <input type="number" name="rate" placeholder="Interest Rate (%)" value={form.rate} onChange={handleChange} required />
            <input type="date" name="maturity" value={form.maturity} onChange={handleChange} required />
        </Modal>
    );
}
