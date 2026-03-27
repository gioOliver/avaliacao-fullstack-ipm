import TaskCard from "../TaskCard/TaskCard";

export default function TaskColumn({ title, status, tasks = [], onSelectTask }) {
    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <div style={styles.column}>
            <h3>{title}</h3>

            {filteredTasks.length === 0 ? (
                <p style={{ opacity: 0.5 }}>Nenhuma tarefa</p>
            ) : (
                filteredTasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onClick={() => onSelectTask(task)}
                    />
                ))
            )}
        </div>
    );
}

const styles = {
    column: {
        flex: 1,
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 10,
        minHeight: 300,
        background: "#fafafa"
    }
};