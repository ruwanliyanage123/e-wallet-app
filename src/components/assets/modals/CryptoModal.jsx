import { useState } from "react";
import Modal from "./ModalWrapper";

const inputClass =
    "w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none";

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
            <select className={inputClass} name="coin" value={form.coin} onChange={handleChange}>
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
            </select>
            <input className={inputClass} type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
            <input className={inputClass} type="number" name="price" placeholder="Price per Coin" value={form.price} onChange={handleChange} required />
        </Modal>
    );
}
