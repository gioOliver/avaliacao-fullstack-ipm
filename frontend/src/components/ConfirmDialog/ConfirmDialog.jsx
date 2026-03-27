export default function ConfirmDialog({ message, onConfirm, onCancel }) {
    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <p>{message}</p>

                <div style={styles.actions}>
                    <button onClick={onConfirm}>Sim</button>
                    <button onClick={onCancel}>Não</button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        width: 300
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10
    }
};