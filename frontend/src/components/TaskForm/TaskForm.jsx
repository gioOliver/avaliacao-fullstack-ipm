import { useState } from "react";

export default function TaskForm({ task, onSave, onClose }) {
    const [title, setTitle] = useState(task?.title || "");
    const [description, setDescription] = useState(task?.description || "");
    const [dueDate, setDueDate] = useState(task?.due_date || "");
    const [status, setStatus] = useState(task?.status || "em aberto");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onSave({
            id: task?.id,
            title,
            description,
            due_date: dueDate,
            status
        });
    }

    return (
        <div style={styles.overlay}>
            <form onSubmit={handleSubmit} style={styles.modal}>
                <h2>{task ? "Editar Tarefa" : "Nova Tarefa"}</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input}
                />

                <textarea
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={styles.textarea}
                />

                <label>Prazo</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    style={styles.input}
                />

                <label>Status</label>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={styles.input}
                >
                    <option value="em aberto">Em aberto</option>
                    <option value="concluido">Concluído</option>
                </select>

                <div style={styles.actions}>
                    <button type="submit">
                        Salvar
                    </button>

                    <button type="button" onClick={onClose}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        width: 400,
        display: "flex",
        flexDirection: "column",
        gap: 10
    },
    input: {
        padding: 8,
        border: "1px solid #ccc"
    },
    textarea: {
        padding: 8,
        border: "1px solid #ccc",
        minHeight: 80
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10
    }
};