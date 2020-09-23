const express = require('express');
// Modulo nativo para trabajar con rutas de directorioss
const path = require("path");
const app = express();
// Requerir mis módulos de ruta
const productsRouter = require('./routes/products');

// Registrar middleware de archivoes estáticos

// Al asociarles una ruta, generamos automáticamente un acceso directo a dicho directorio. De esta forma podemos acceder a este material desde cualquier parte del proyecto sin preocuparnos por la ubicación donde nos econtremons, solo hace falta declarar /static/nombreArchivo.ext

app.use("/static", express.static(path.join(__dirname, "public")));

// Establecer el directorio de las vistas
app.set("views", path.join(__dirname, "views"))
// Asociar al motor de plantillas los archivos con extensión .pug
app.set("view engine", "pug");

// endpoints productos
app.use('/products', productsRouter)

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`)
})