import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/autenticar/login`, {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token);
            alert('Inicio de sesión exitoso');
           
        } catch (error) {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Iniciar Sesión</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <div style={styles.field}>
                    <label style={styles.label}>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.field}>
                    <label style={styles.label}>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                </div>
                {error && <p style={styles.error}>{error}</p>}
                <button type="submit" style={styles.button}>Iniciar Sesión</button>
                <div style={styles.links}>
                    <a href="/forgot-password" style={styles.link}>¿Olvidaste tu contraseña?</a>
                    <a href="/register" style={styles.link}>Registrarse</a>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',    // Fija el contenedor en la pantalla
        bottom: '370px',       // Coloca el contenedor a 20px del borde inferior
        left: '50%',          // Centra el contenedor horizontalmente
        transform: 'translateX(-50%)',  // Ajusta para que esté perfectamente centrado
        maxWidth: '300px',    // Ancho máximo ajustado
        padding: '20px',      // Relleno ajustado
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'center',
    },
    title: { fontSize: '24px', marginBottom: '20px' },
    form: { display: 'flex', flexDirection: 'column' },
    field: { marginBottom: '15px' },
    label: { marginBottom: '5px', fontWeight: 'bold' },
    input: { padding: '8px', width: '100%' },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: { color: 'red', marginBottom: '10px' },
    links: { marginTop: '10px', display: 'flex', justifyContent: 'space-between' },
    link: { fontSize: '14px', color: '#007bff', textDecoration: 'none' },
};

export default Login;
