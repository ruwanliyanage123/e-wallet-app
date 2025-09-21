import Footer from "../components/Footer";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <nav className="bg-blue-600 shadow-md px-6 py-6 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">e-wallet</h1>
                <div className="space-x-4">
                    <a
                        href="/login"
                        className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
                    >
                        Login
                    </a>
                </div>
            </nav>

            {/* Hero Section with Background Image */}
            <header
                className="flex flex-col items-center justify-center text-center px-6 py-20 flex-1 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative z-10 max-w-2xl text-white">
                    <h2 className="text-4xl font-extrabold mb-6">
                        Manage Your Investments with Ease
                    </h2>
                    <p className="text-lg mb-8">
                        Track your assets, monitor your portfolio performance, and stay in
                        control of your financial future — all in one place.
                    </p>
                    <a
                        href="/login"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Get Started
                    </a>
                </div>
            </header>

            {/* Features */}
            <section id="features" className="bg-white py-16 px-8">
                <h3 className="text-2xl font-bold text-center text-slate-800 mb-10">
                    Why Choose Portfolio Hub?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
                        <h4 className="font-bold text-lg mb-2">📊 Portfolio Tracking</h4>
                        <p className="text-gray-600">
                            Get real-time insights into your investments across stocks, bonds,
                            crypto, and more.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
                        <h4 className="font-bold text-lg mb-2">🔒 Secure Login</h4>
                        <p className="text-gray-600">
                            Your data is protected with industry-leading authentication and
                            encryption standards.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
                        <h4 className="font-bold text-lg mb-2">📈 Smart Reports</h4>
                        <p className="text-gray-600">
                            Generate beautiful visual reports to analyze your performance and
                            make smarter decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
