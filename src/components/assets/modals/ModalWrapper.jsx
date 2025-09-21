export default function Modal({ title, children, onClose, onSubmit }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-96 shadow-md">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    {children}
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
