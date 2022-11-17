const socket = io.connect();


function addMessage() {
    const mensaje = document.getElementById('mensajes').value;
    const correo = document.getElementById('correo').value;

    const newMessage = {
        correo: correo, 
        mensaje: mensaje
    }
    socket.emit('new-message', newMessage);
    return false;
}

async function bringProducts(itemProduct) {
    const itemList = await fetch('views/partials/Productos.ejs');
    
}

async function addItem() {
    const title = document.getElementById('nombre').value;
    const price = document.getElementById('price').value;
    const thumbnail = document.getElementById('thumbnail').value;

    const newItem = {
        title: title,
        price: price,
        thumbnail: thumbnail
    }
    socket.emit('newItem', newItem);
    return false;
}

function render(data) {

    const html = data.map((elem, index) => {
        return (`
        <div>
            <strong>${elem.correo}</strong>
            <strong>[${elem.fecha}]:</strong>
            <strong>${elem.mensaje}</strong>
        </div>
        `);
    }).join('');

    document.getElementById('messeges').innerHTML = html;
}

socket.on('mensajes', function(data) {
    render(data);
});