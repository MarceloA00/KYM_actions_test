const express = require('express');
const app = express();
const port = 3000;

// Métodos de consulta que devuelven JSON
app.get('/api/method1', (req, res) => { res.json({ message: 'Respuesta del método 1' }); });
app.get('/api/method2', (req, res) => { res.json({ message: 'Respuesta del método 2' }); });
app.get('/api/method3', (req, res) => { res.json({ message: 'Respuesta del método 3' }); });

// Iniciar el servidor

app.listen(port, () => { console.log(`Servidor escuchando en http://localhost:${port}`); });