
import useLoginStore from "../../store/LoginStore";
import NavbarAdmin from "../../components/NavbarAdmin";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

    // Get the currently logged-in user from Zustand
    const { user } = useLoginStore();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Admin Navigation Bar */}
            <NavbarAdmin />

            {/* Main Dashboard Container */}
            <main className="p-6 md:p-8">

                {/* =========================
                    WELCOME SECTION
                ========================== */}
                <div className="mb-8">

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Welcome back, {user?.username} 👋
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Here's what's happening with your store today.
                    </p>

                </div>


                {/* =========================
                    STATISTICS CARDS
                ========================== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                    {/* Total Users */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Total Users
                                </p>

                                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                    120
                                </h2>
                            </div>

                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-2xl">
                                👥
                            </div>

                        </div>

                        <p className="text-sm text-green-600 mt-4">
                            ↑ 12% from last month
                        </p>

                    </div>


                    {/* Total Products */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Total Products
                                </p>

                                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                    48
                                </h2>
                            </div>

                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 text-2xl">
                                📦
                            </div>

                        </div>

                        <p className="text-sm text-green-600 mt-4">
                            ↑ 8% from last month
                        </p>

                    </div>


                    {/* Total Sales */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Total Sales
                                </p>

                                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                    Rs. 85,450
                                </h2>
                            </div>

                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600 text-2xl">
                                💰
                            </div>

                        </div>

                        <p className="text-sm text-green-600 mt-4">
                            ↑ 18% from last month
                        </p>

                    </div>


                    {/* Orders */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Total Orders
                                </p>

                                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                    156
                                </h2>
                            </div>

                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 text-2xl">
                                🛒
                            </div>

                        </div>

                        <p className="text-sm text-green-600 mt-4">
                            ↑ 10% from last month
                        </p>

                    </div>

                </div>


                {/* =========================
                    MAIN DASHBOARD CONTENT
                ========================== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                    {/* =========================
                        QUICK ACTIONS
                    ========================== */}
                    <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">

                        <h2 className="text-xl font-bold text-gray-800 mb-5">
                            Quick Actions
                        </h2>

                        <div className="space-y-3">

                            <button onClick={() => navigate("/addproducts")}
                            className="w-full flex items-center gap-3 p-4 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition">

                                <span className="text-xl">
                                    ➕
                                </span>

                                <span className="font-medium">
                                    Add New Product
                                </span>

                            </button>


                            <button onClick={() => navigate("/logindetails")}
                            className="w-full flex items-center gap-3 p-4 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition">

                                <span className="text-xl">
                                    👥
                                </span>

                                <span className="font-medium">
                                    Manage Users
                                </span>

                            </button>


                            <button onClick={() => navigate("/viewsales")}
                            className="w-full flex items-center gap-3 p-4 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition">

                                <span className="text-xl">
                                    📊
                                </span>

                                <span className="font-medium">
                                    View Sales
                                </span>

                            </button>


                            <button className="w-full flex items-center gap-3 p-4 rounded-lg bg-orange-50 text-orange-700 hover:bg-orange-100 transition">

                                <span className="text-xl">
                                    📦
                                </span>

                                <span className="font-medium">
                                    Manage Products
                                </span>

                            </button>

                        </div>

                    </div>


                    
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">

                        <div className="flex items-center justify-between mb-5">

                            <h2 className="text-xl font-bold text-gray-800">
                                Recent Activity
                            </h2>

                            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                View All
                            </button>

                        </div>


                        <div className="space-y-5">


                            {/* Activity 1 */}
                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    🛒
                                </div>

                                <div className="flex-1">

                                    <p className="text-sm font-medium text-gray-800">
                                        New order received
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Order #1025 was placed successfully.
                                    </p>

                                </div>

                                <span className="text-xs text-gray-400">
                                    5 min ago
                                </span>

                            </div>


                            {/* Activity 2 */}
                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    👤
                                </div>

                                <div className="flex-1">

                                    <p className="text-sm font-medium text-gray-800">
                                        New user registered
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        A new customer joined the platform.
                                    </p>

                                </div>

                                <span className="text-xs text-gray-400">
                                    20 min ago
                                </span>

                            </div>


                            {/* Activity 3 */}
                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                    📦
                                </div>

                                <div className="flex-1">

                                    <p className="text-sm font-medium text-gray-800">
                                        Product added
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        A new product was added to inventory.
                                    </p>

                                </div>

                                <span className="text-xs text-gray-400">
                                    1 hour ago
                                </span>

                            </div>


                            {/* Activity 4 */}
                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                    💰
                                </div>

                                <div className="flex-1">

                                    <p className="text-sm font-medium text-gray-800">
                                        Payment received
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Payment of Rs. 4,500 was received.
                                    </p>

                                </div>

                                <span className="text-xs text-gray-400">
                                    2 hours ago
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================
                    ADMIN INFORMATION
                ========================== */}
                <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">

                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Admin Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div>
                            <p className="text-sm text-gray-500">
                                Username
                            </p>

                            <p className="font-semibold text-gray-800 mt-1">
                                {user?.username || "Admin"}
                            </p>
                        </div>


                        <div>
                            <p className="text-sm text-gray-500">
                                Role
                            </p>

                            <p className="font-semibold text-gray-800 mt-1">
                                {user?.role || "Administrator"}
                            </p>
                        </div>


                        <div>
                            <p className="text-sm text-gray-500">
                                Account Status
                            </p>

                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                Active
                            </span>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default AdminDashboard;

