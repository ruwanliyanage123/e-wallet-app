import Footer from "../components/Footer";

export default function Landing() {
    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Page content */}
            <div className="relative z-10 flex flex-col min-h-screen text-white">
                {/* Navbar */}
                <nav className="bg-blue-600 bg-opacity-90 shadow-md px-6 py-6 flex justify-between items-center">
                    <h1 className="text-xl font-bold">e-wallet</h1>
                    <div className="space-x-4">
                        <a
                            href="/login"
                            className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
                        >
                            Login
                        </a>
                    </div>
                </nav>

                {/* Hero */}
                <header className="flex flex-col items-center justify-center text-center px-6 py-20 flex-1">
                    <h2 className="text-4xl font-extrabold mb-6">
                        Manage Your Investments with Ease
                    </h2>
                    <p className="text-lg text-gray-200 mb-8 max-w-xl">
                        Track your assets, monitor your portfolio performance, and stay in
                        control of your financial future — all in one place.
                    </p>
                    <a
                        href="/login"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Get Started
                    </a>
                </header>

                {/* Features */}
                <section id="features" className="py-16 px-8">
                    <h3 className="text-2xl font-bold text-center mb-10">
                        Why Choose Portfolio Hub?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-6 rounded-xl shadow bg-white/10 hover:bg-white/20 transition">
                            <h4 className="font-bold text-lg mb-2">📊 Portfolio Tracking</h4>
                            <p className="text-gray-200">
                                Get real-time insights into your investments across stocks,
                                bonds, crypto, and more.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl shadow bg-white/10 hover:bg-white/20 transition">
                            <h4 className="font-bold text-lg mb-2">🔒 Secure Login</h4>
                            <p className="text-gray-200">
                                Your data is protected with industry-leading authentication and
                                encryption standards.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl shadow bg-white/10 hover:bg-white/20 transition">
                            <h4 className="font-bold text-lg mb-2">📈 Smart Reports</h4>
                            <p className="text-gray-200">
                                Generate beautiful visual reports to analyze your performance
                                and make smarter decisions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-auto">
                    <Footer />
                </footer>
            </div>
        </div>
    );
}
