import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TaskBoard from "../../components/TaskBoard/TaskBoard";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskModal from "../../components/TaskModal/TaskModal";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import { getTasks, createTask, updateTask, deleteTask } from "../../services/api";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

   async function loadTasks() {
    try {
        setLoading(true);
        setError("");

        const data = await getTasks();

        const tasks = data.tasks || [];

        const formatted = tasks.map(task => ({
            id: task.id,
            title: task.title,
            description: task.description,

            status: task.status === "concluido" ? "concluido" : "em aberto",

            due_date: task.due_date.split(" ")[0],
            created_at: task.created_at.split(" ")[0],
        }));

        setTasks(formatted);

    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
}

    function handleSelectTask(task) {
        setSelectedTask(task);
        setIsModalOpen(true);
    }

    function handleCreateTask() {
        setSelectedTask(null);
        setIsFormOpen(true);
    }

    async function handleSaveTask(task) {
        try {
            setError("");

            if (task.id) {
                await updateTask(task.id, task);
            } else {
                await createTask(task);
            }

            await loadTasks();
            setIsFormOpen(false);
            setIsModalOpen(false);
            setSelectedTask(null);
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDeleteTask() {
        try {
            setError("");

            if (!selectedTask?.id) return;

            await deleteTask(selectedTask.id);
            await loadTasks();

            setIsConfirmOpen(false);
            setIsModalOpen(false);
            setSelectedTask(null);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <Header />

            <div style={{ padding: 20, textAlign: "right" }}>
                <button onClick={handleCreateTask}>+ Nova Tarefa</button>
            </div>

            {loading && <p style={{ padding: 20 }}>Carregando tarefas...</p>}
            {error && <p style={{ padding: 20, color: "red" }}>{error}</p>}

            {!loading && (
                <TaskBoard
                    tasks={tasks}
                    onSelectTask={handleSelectTask}
                />
            )}

            {isModalOpen && selectedTask && (
                <TaskModal
                    task={selectedTask}
                    onClose={() => setIsModalOpen(false)}
                    onEdit={() => {
                        setIsModalOpen(false);
                        setIsFormOpen(true);
                    }}
                    onDelete={() => setIsConfirmOpen(true)}
                />
            )}

            {isFormOpen && (
                <TaskForm
                    task={selectedTask}
                    onSave={handleSaveTask}
                    onClose={() => {
                        setIsFormOpen(false);
                        setSelectedTask(null);
                    }}
                />
            )}

            {isConfirmOpen && selectedTask && (
                <ConfirmDialog
                    message="Deseja excluir essa tarefa?"
                    onConfirm={handleDeleteTask}
                    onCancel={() => setIsConfirmOpen(false)}
                />
            )}
        </div>
    );
}