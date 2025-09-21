import { useState } from "react";
import Modal from "./ModalWrapper";

export default function RealEstateModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ property: "", type: "Residential", value: "", location: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            name: form.property,
            details: `${form.type}, Location: ${form.location}`,
            value: Number(form.value),
        });
        onClose();
    };

    return (
        <Modal title="Add Real Estate / REIT" onClose={onClose} onSubmit={handleSubmit}>
            <input type="text" name="property" placeholder="Property Name" value={form.property} onChange={handleChange} required />
            <select name="type" value={form.type} onChange={handleChange}>
                <option>Residential</option>
                <option>Commercial</option>
                <option>REIT</option>
            </select>
            <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
            <input type="number" name="value" placeholder="Property Value" value={form.value} onChange={handleChange} required />
        </Modal>
    );
}
