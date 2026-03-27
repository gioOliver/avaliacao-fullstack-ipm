import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, register } from "../services/api";

export default function Login() {
    const [isRegister, setIsRegister] = useState(false);

    // login fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // register fields
    const [name, setName] = useState("");
    const [hidePassword, setHidePassword] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const data = await login({ email, password });

            localStorage.setItem("token", data.token);

           navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleRegister(e) {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            await register({
                name,
                email,
                password
            });

            setSuccess("Usuário criado com sucesso");

            // opcional: já volta pra tela de login
            setIsRegister(false);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div style={{ maxWidth: 400, margin: "100px auto" }}>
            <h2>{isRegister ? "Criar Conta" : "Login"}</h2>

            {isRegister ? (
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                        style={{
                                width: "100%",
                                padding: "8px 35px 8px 8px",
                                boxSizing: "border-box"
                            }}
                    />

                    <div style={{ marginTop: 10 }}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px 35px 8px 8px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <div style={{ marginTop: 10, position: "relative" }}>
                        <input
                            type={hidePassword ? "text" : "password"}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px 35px 8px 8px",
                                boxSizing: "border-box"
                            }}
                        />
                        <span
                            onClick={() => setHidePassword(!hidePassword)}
                            style={{
                                position: "absolute",
                                right: 10,
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                userSelect: "none"
                            }}
                        >{hidePassword ? "🙉" : "🙈"}</span>
                        
                    </div>

                    <button style={{ marginTop: 10 }} type="submit">
                        Criar conta
                    </button>
                </form>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                                width: "100%",
                                padding: "8px 35px 8px 8px",
                                boxSizing: "border-box"
                            }}
                    />

                    <div style={{ marginTop: 10 }}>
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px 35px 8px 8px",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <button style={{ marginTop: 10 }} type="submit">
                        Entrar
                    </button>
                </form>
            )}

            <button
                style={{ marginTop: 10, background: "transparent", border: "none", color: "lightblue", cursor: "pointer" }}
                onClick={() => setIsRegister(!isRegister)}
            >
                {isRegister ? "Já tenho conta" : "Criar conta"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
    );
}