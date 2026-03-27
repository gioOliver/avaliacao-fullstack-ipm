import { formatDate } from "../../utils/date";

export default function TaskModal({ task, onClose, onEdit, onDelete }) {
    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>#{task.id} - {task.title}</h2>

                <p>{task.description}</p>

                <p style={styles.date}>
                    Prazo {formatDate(task.due_date)}
                </p>

                <p style={styles.status}>
                    <span style={styles.date}>Criado em {formatDate(task.created_at)}. </span>
                    Status: {task.status === "concluido" ? "Concluído" : "Em aberto"}
                </p>

                <div style={styles.actions}>
                    <button onClick={onEdit}>Editar</button>
                    <button onClick={onDelete}>Excluir</button>
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
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
        width: 400
    },
    actions: {
        display: "flex",
        gap: 10,
        marginTop: 20
    },
    status: {
        fontSize: 12,
        opacity: 0.7
    }
};