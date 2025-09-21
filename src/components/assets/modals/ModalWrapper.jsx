import { motion } from "framer-motion";

export default function Modal({ title, children, onClose, onSubmit }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl shadow-2xl w-[420px] max-w-full p-6"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-lg font-bold"
                    >
                        ×
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-3">{children}</div>
                    <div className="flex justify-end space-x-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
