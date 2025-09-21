import { useState } from "react";
import Modal from "./ModalWrapper";

const inputClass =
    "w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none";

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
            <input className={inputClass} type="text" name="property" placeholder="Property Name" value={form.property} onChange={handleChange} required />
            <select className={inputClass} name="type" value={form.type} onChange={handleChange}>
                <option>Residential</option>
                <option>Commercial</option>
                <option>REIT</option>
            </select>
            <input className={inputClass} type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
            <input className={inputClass} type="number" name="value" placeholder="Property Value" value={form.value} onChange={handleChange} required />
        </Modal>
    );
}
