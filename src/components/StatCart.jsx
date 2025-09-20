export default function StatCard({ title, value, change, positive }) {
    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-gray-500">{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
            <span className={`text-sm ${positive ? "text-green-600" : "text-red-600"}`}>
        {change}
      </span>
        </div>
    );
}
