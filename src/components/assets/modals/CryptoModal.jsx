import { useState } from "react";
import Modal from "./ModalWrapper";

export default function CryptoModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ coin: "BTC", amount: "", price: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name: form.coin,
            details: `${form.amount} coins`,
            value: Number(form.amount) * Number(form.price),
        });
        onClose();
    };

    return (
        <Modal title="Add Cryptocurrency" onClose={onClose} onSubmit={handleSubmit}>
            <select name="coin" value={form.coin} onChange={handleChange}>
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
            </select>
            <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price per Coin" value={form.price} onChange={handleChange} required />
        </Modal>
    );
}
