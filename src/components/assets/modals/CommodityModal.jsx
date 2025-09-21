import { useState } from "react";
import Modal from "./ModalWrapper";

export default function CommodityModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ type: "Gold", quantity: "", price: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name: form.type,
            details: `${form.quantity} units`,
            value: Number(form.quantity) * Number(form.price),
        });
        onClose();
    };

    return (
        <Modal title="Add Commodity" onClose={onClose} onSubmit={handleSubmit}>
            <select name="type" value={form.type} onChange={handleChange}>
                <option>Gold</option>
                <option>Silver</option>
                <option>Oil</option>
            </select>
            <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price per Unit" value={form.price} onChange={handleChange} required />
        </Modal>
    );
}
