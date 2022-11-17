//Requires
const express = require('express');
const { Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');
const app = express();
const Contenedor = require('./Contenedor/index.js');
const routerProd = express.Router();
const contenedor = new Contenedor();
const PORT = 8080;
const myRoutes = routerProd.get('/', (req, res) => {
    res.render('index');
});

//Servidor socket.io (Entrega Seis)
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//Entregas anteriores
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(myRoutes);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views','./public/views');
app.use(myRoutes);

//IO
io.on('connection', socket => {
    console.log('Nuevo cliente conectado!');

    //Mensajes
    socket.emit('mensajes', mensajes)

    socket.on('new-message', data => {
        mensajes.push(data);
        io.sockets.emit('mensajes', mensajes)
    });

    //Traemos los productos
    const items = Contenedor.getAll()
    socket.emit('productos', items);
    //Guardando productos
    socket.on('newItem', (newItem) => {
        Contenedor.save(newItem)
        io.sockets.emit('productos', items)
    });

    //Traemos el historial de mensajes
    socket.emit();
    socket.on();
});

//Levantando el servidor
const server = app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`)
});
server.on('error', (error) => {
    console.log('Server error:' , error)
});

