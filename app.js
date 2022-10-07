import express from "express";
import 'dotenv/config';
import path from "path";
import hbs from "hbs";
import morgan from "morgan";
import methodOverride  from "method-override";
import { fileURLToPath } from "url";
import { router } from './src/routes/tareasRouters.js'
//import './src/db/conexion.js';

//definimos la ruta del scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//inicio
const PORT = process.env.PORT || 4000;
const app = express();

//Middelwares
app.use(morgan('common')); //dev - combined
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));

//Seteamos hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
hbs.registerPartials(path.join(__dirname, 'src/views/partials'))

//rutas
app.use(router);


app.listen(PORT, () =>{
    console.log(`Aplicacion con Yarn y ES6 corriendo en el puerto: ${PORT}`);
})