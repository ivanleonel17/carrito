# Proyecto Node.js - Carrito de Compras

Este proyecto en Node.js tiene como objetivo crear un sistema de manejo de carrito de compras, permitiendo agregar y quitar productos, así como obtener información sobre los productos y el carrito.

## Instalación

1. Clona este repositorio:

git clone https://github.com/ivanleonel17/carrito.git


2. Instala las dependencias:

npm install


## Uso

1. Ejecuta la aplicación:

node app.js


2. Utiliza Postman u otra extensión de Visual para realizar las siguientes solicitudes:

- `POST /products-cart`: Agregar un producto al carrito.
- `DELETE /products-cart/:productId`: Eliminar un producto del carrito.
- `GET /products`: Obtener información de los productos disponibles.
- `GET /products-cart  `: Obtener información del carrito.
- `PUT /products-cart/:productId?query=add`: Actualizar un producto en el carrito.
