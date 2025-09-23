const API_URL = "http://localhost:4000/api";

// Helper: attach token automatically
function authHeaders() {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
}

// ✅ Auth
export async function register(email, password, name) {
    const res = await fetch(`http://localhost:4000/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
    });
    if (!res.ok) throw new Error("Registration failed");
    return res.json();
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

export async function login(email, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("Invalid credentials");
    return res.json(); // { token, user }
}

// ✅ Users
export async function getMe() {
    const res = await fetch(`${API_URL}/users/me`, {
        headers: { ...authHeaders() },
    });
    if (!res.ok) throw new Error("Unauthorized");
    return res.json();
}

// ✅ Categories
export async function getCategories() {
    const res = await fetch(`${API_URL}/categories`, {
        headers: { ...authHeaders() },
    });
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
}

// ✅ Portfolios
export async function getPortfolios() {
    const res = await fetch(`${API_URL}/portfolios`, {
        headers: { ...authHeaders() },
    });
    if (!res.ok) throw new Error("Failed to fetch portfolios");
    return res.json();
}

export async function createPortfolio(name) {
    const res = await fetch(`${API_URL}/portfolios`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ name }),
    });
    if (!res.ok) throw new Error("Failed to create portfolio");
    return res.json();
}


// ✅ Transactions
export async function createTransaction(payload) {
    const res = await fetch(`${API_URL}/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to create transaction");
    return res.json();
}

export async function getTransactions() {
    const res = await fetch(`${API_URL}/transactions`, {
        headers: { ...authHeaders() },
    });
    if (!res.ok) throw new Error("Failed to fetch transactions");
    return res.json();
}


// ✅ Assets
export async function getAssets() {
    const res = await fetch(`${API_URL}/assets`, {
        headers: { ...authHeaders() },
    });
    if (!res.ok) throw new Error("Failed to fetch assets");
    return res.json();
}

export async function createAsset(asset) {
    const res = await fetch(`${API_URL}/assets`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({
            ...asset,
            categoryId: Number(asset.categoryId), // ✅ ensure Int
        }),
    });
    if (!res.ok) {
        const error = await res.json();
        console.error("Create asset failed:", error);
        throw new Error("Failed to create asset");
    }
    return res.json();
}

