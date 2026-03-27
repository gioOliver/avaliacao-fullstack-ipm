import TaskColumn from "../TaskColumn/TaskColumn";

export default function TaskBoard({ tasks, onSelectTask }) {
    return (
        <div style={styles.board}>
            <TaskColumn
                title="Em Aberto"
                status="em aberto"
                tasks={tasks}
                onSelectTask={onSelectTask}
            />

            <TaskColumn
                title="Concluído"
                status="concluido"
                tasks={tasks}
                onSelectTask={onSelectTask}
            />
        </div>
    );
}

const styles = {
    board: {
        display: "flex",
        gap: 20,
        padding: 20
    }
};