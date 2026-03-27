const API_URL = "http://localhost:8000";

export async function login(data) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || "Erro ao fazer login");
    }

    return result;
}