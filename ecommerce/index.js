const express = require('express');
// Modulo nativo para trabajar con rutas de directorioss
const path = require("path");
const boom = require("boom");
const helmet = require("helmet");

const {
    logErrors,
    clientErrorHandler,
    errorHandler
  } = require("./utils/middleware/errorsHandlers");

// app
const app = express();

// Requerir mis módulos de ruta
const productsRouter = require('./routes/views/products');
const productsApiRouter = require('./routes/api/products');
const authApiRouter = require("./routes/api/auth");

// Registrar middleware de archivoes estáticos

// Al asociarles una ruta, generamos automáticamente un acceso directo a dicho directorio. De esta forma podemos acceder a este material desde cualquier parte del proyecto sin preocuparnos por la ubicación donde nos econtremons, solo hace falta declarar /static/nombreArchivo.ext
// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// Establecer el directorio de las vistas
app.set("views", path.join(__dirname, "views"))
// Asociar al motor de plantillas los archivos con extensión .pug
app.set("view engine", "pug");

// middlewares
app.use(helmet());
app.use(express.json());

// endpoints or routes
app.use('/products', productsRouter)
productsApiRouter(app);
app.use("/api/auth", authApiRouter);

// redirect
app.get('/', function(req, res){
    res.redirect('/products');
})

// error handlers
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// server
const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`)
})