import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export default function Header() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    let user = null;

    try {
        if (token) {
            user = jwtDecode(token)?.data;
        }
    } catch {
        user = null;
    }

    function handleLogout() {
        localStorage.removeItem("token");

        navigate("/");
    }

    return (
        <header style={styles.header}>
            <h2>Agenda de Tarefas</h2>

            <div style={styles.right}>
                <span>
                    👤 {user?.email || "Usuário"}
                </span>

                <button onClick={handleLogout} style={styles.button}>
                    Sair
                </button>
            </div>
        </header>
    );
}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        borderBottom: "1px solid #ddd",
        background: "#fff"
    },
    right: {
        display: "flex",
        gap: "10px",
        alignItems: "center"
    },
    button: {
        cursor: "pointer",
        padding: "6px 12px"
    }
};