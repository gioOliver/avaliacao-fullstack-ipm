// src/components/TaskCard/TaskCard.jsx

export default function TaskCard({ task, onClick }) {
    return (
        <div onClick={onClick} style={styles.card}>
            <h4 style={{ margin: 0 }}>{task.title}</h4>
            <p style={styles.desc}>{task.description}</p>
            <p style={styles.desc}>Prazo: {task.due_date}</p>
        </div>
    );
}

const styles = {
    card: {
        padding: 10,
        marginTop: 10,
        border: "1px solid #ccc",
        borderRadius: 6,
        background: "#fff",
        cursor: "pointer"
    },
    desc: {
        fontSize: 12,
        opacity: 0.7,
        marginTop: 5
    }
};