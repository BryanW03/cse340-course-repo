import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Definir __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Configuración absoluta: garantiza que Express encuentre la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('home', { title: 'Home' }));
app.get('/organizations', (req, res) => res.render('organizations', { title: 'Organizations' }));
app.get('/projects', (req, res) => res.render('projects', { title: 'Service Projects' }));
app.get('/categories', (req, res) => res.render('categories', { title: 'Service Project Categories' }));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});