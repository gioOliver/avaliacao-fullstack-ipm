const API_URL = "http://localhost:8000";

function getAuthHeaders() {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };
}

export async function login(data) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || "Erro ao fazer login");
    }

    return result;
}

export async function register(data) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || "Erro ao criar usuário");
    }

    return result;
}

export async function getTasks() {
    const response = await fetch(`${API_URL}/tasks`, {
        method: "GET",
        headers: getAuthHeaders()
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || "Erro ao buscar tarefas");
    }

    return result;
}

export async function createTask(data) {
    const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || "Erro ao criar tarefa");
    }

    return result;
}

export async function updateTask(id, data) {
    const response = await fetch(`${API_URL}/tasks?id=${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || "Erro ao atualizar tarefa");
    }

    return result;
}

export async function deleteTask(id) {
    const response = await fetch(`${API_URL}/tasks?id=${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || "Erro ao excluir tarefa");
    }

    return result;
}