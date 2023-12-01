Proyecto Node.js - Carrito de Compras

Este proyecto en Node.js tiene como objetivo crear un sistema de manejo de carrito de compras, permitiendo agregar y quitar productos, así como obtener información sobre los productos y el carrito.

Instalación

1 -Clona este repositorio:

Git clone ttps://github.com/ivanleonel17/carrito.git

2- Instala las dependencias:

npm install

Uso

1- Ejecuta la aplicación:
node app.js

2 - Utiliza Postman u otra extensión de Visual para realizar las siguientes solicitudes:

-POST /addProduct: Agregar un producto al carrito.
-DELETE /deleteProduct/:productId: Eliminar un producto del carrito.
-GET /getProducts: Obtener información de los productos disponibles.
-GET /getProductsCart: Obtener información del carrito.
-PUT /putProduct/:productId: Actualizar un producto en el carrito.
