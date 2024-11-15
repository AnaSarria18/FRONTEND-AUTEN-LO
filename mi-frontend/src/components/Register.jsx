import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState(''); // Para mostrar mensaje de éxito

    const handleRegister = async (e) => {
        e.preventDefault();

        // Verificar que las contraseñas coincidan
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        // Verificar que el email no esté vacío
        if (!email) {
            setError('El correo electrónico es obligatorio');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/autenticar/register', { username, password, email });
            console.log("Respuesta del servidor:", response.data);
            setMessage(response.data.message); // Mostrar mensaje de éxito
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
        } catch (error) {
            console.error("Error en el registro:", error);
            setError(error.response?.data?.message || "Error en el registro");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Registrarse</h2>
            <form onSubmit={handleRegister} style={styles.form}>
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
                    <label style={styles.label}>Correo electrónico:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div style={styles.field}>
                    <label style={styles.label}>Confirmar Contraseña:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={styles.input}
                    />
                </div>
                {error && <p style={styles.error}>{error}</p>}
                {message && <p style={styles.success}>{message}</p>}
                <button type="submit" style={styles.button}>Registrarse</button>
                <div style={styles.links}>
                    <a href="/login" style={styles.link}>¿Ya tienes cuenta? Iniciar sesión</a>
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
    input: { padding: '8px', width: '100%', maxWidth:'290px', boxSizing:'border-box' },
    button: {
        padding: '10px',
        backgroundColor: '#f8c8dc',
        color: '#000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: { color: 'red', marginBottom: '10px' },
    success: { color: 'green', marginBottom: '10px' }, // Para el mensaje de éxito
    links: { marginTop: '10px', display: 'flex', justifyContent: 'space-between' },
    link: { fontSize: '14px', color: '#000', textDecoration: 'none' },
};
document.body.style.backgroundColor = "#fbe3e5";

export default Register;
