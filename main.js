const carrito = [];

// Función para listar productos
const listarProductos = () => {
    return arrayProductos.map((producto, index) => `${index + 1}. ${producto.marca} ${producto.modelo} - $${producto.precio.toFixed(2)}`).join("\n");
};

// Función para agregar productos al carrito
const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    alert(`Producto agregado al carrito: ${producto.marca} ${producto.modelo}`);
};

// Función para calcular el precio total del carrito
const calcularPrecioTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
};

// Función principal para iniciar la compra
const iniciarCompra = () => {
    alert("¡Bienvenido a MoviZone!");

    // Preguntar si quiere ver la lista de productos
    const quiereVerLista = confirm("¿Querés ver la lista de todos los productos?");
    if (quiereVerLista) {
        const lista = listarProductos();
        alert("Listado de productos:\n" + lista);
    }

    // Preguntar si quiere agregar productos al carrito
    const quiereAgregar = confirm("¿Querés seleccionar productos para agregar al carrito?");
    if (quiereAgregar) {
        let seleccion = "";
        while (seleccion !== "salir") {
            seleccion = prompt(
                "Escribí el número del producto que querés agregar al carrito (o escribí 'salir' para terminar):\n" +
                listarProductos()
            );

            if (seleccion === "salir") break;

            const indice = parseInt(seleccion) - 1;
            if (!isNaN(indice) && arrayProductos[indice]) {
                agregarAlCarrito(arrayProductos[indice]);
            } else {
                alert("Selección inválida. Por favor, intentá nuevamente.");
            }
        }
    }

    // Mostrar contenido del carrito y precio total al finalizar
    if (carrito.length > 0) {
        const precioTotal = calcularPrecioTotal();
        alert(
            "Productos en tu carrito:\n" +
            carrito.map(producto => `${producto.marca} ${producto.modelo} - $${producto.precio.toFixed(2)}`).join("\n") +
            `\n\nPrecio total: $${precioTotal.toFixed(2)}`
        );
    } else {
        alert("No agregaste ningún producto al carrito.");
    }
};

iniciarCompra();