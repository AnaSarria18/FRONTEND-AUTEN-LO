/* import React from 'react';
import Login from './components/Login';
import Register from './components/register';

const App = () => {
    return (
        <div>
            <Login />
            <Register />
        </div>
    );
};

export default App; */



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'; 
import Register from './components/Register'; 
const App = () => {
    return (
        <Router>
            <Routes>
                {/* Ruta para el login */}
                <Route path="/login" element={<Login />} />
                {/* Ruta para el registro */}
                <Route path="/register" element={<Register />} />
                {/* Ruta por defecto, si quieres redirigir a login o otra página */}
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;

