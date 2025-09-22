const API_URL = "http://localhost:4000/api/auth";

export async function login(email, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        throw new Error("Invalid credentials");
    }

    return res.json(); // { token, user }
}

export async function register(email, password, name) {
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
    });

    if (!res.ok) {
        throw new Error("Registration failed");
    }

    return res.json();
}
