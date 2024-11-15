import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/autenticar/login', { username, password });
            console.log("Respuesta del servidor:", response.data);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                alert(response.data.message); // Debería mostrar "Inicio de sesión exitoso"
            }
        } catch (error) {
            alert(error.response.data.message || "Error en el inicio de sesión");
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
        position: 'fixed',   
        bottom: '370px',       
        left: '50%',         
        transform: 'translateX(-50%)',  
        maxWidth: '300px',    
        padding: '20px',     
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'center',
        backgroundColor:'#FFF0F5'
    },
    title: { fontSize: '24px', marginBottom: '20px' },
    form: { display: 'flex', flexDirection: 'column' },
    field: { marginBottom: '15px' },
    label: { marginBottom: '5px', fontWeight: 'bold' },
    input: { padding: '8px', width: '100%', maxWidth:'270px', boxSizing: 'border-box'},
    button: {
        padding: '10px',
        backgroundColor: '#f8c8dc',
        color: '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: { color: 'red', marginBottom: '10px' },
    links: { marginTop: '10px', display: 'flex', justifyContent: 'space-between' },
    link: { fontSize: '14px', color: '#000', textDecoration: 'none' },
};

document.body.style.backgroundColor = "#fbe3e5";
export default Login;
