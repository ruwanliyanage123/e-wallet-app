import { useEffect, useState } from "react";
import { getTransactions } from "../services/api";

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTransactions()
            .then(setTransactions)
            .catch((err) => console.error("Error fetching transactions:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="p-6">Loading transactions...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Transactions</h1>

            {transactions.length === 0 ? (
                <p className="text-gray-600">No transactions yet.</p>
            ) : (
                <table className="w-full mt-4 border">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Amount</th>
                        <th className="border p-2">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id}>
                            <td className="border p-2">{t.type}</td>
                            <td className="border p-2">{t.quantity ?? "-"}</td>
                            <td className="border p-2">{t.price ?? "-"}</td>
                            <td className="border p-2">{t.amount ?? "-"}</td>
                            <td className="border p-2">
                                {new Date(t.occurredAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
