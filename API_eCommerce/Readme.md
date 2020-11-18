# Seminario MongoDB 2020 - TP Final API ECommerce

Trabajo realizado por Santiago Diaz Pace

Utilizando MongoDB, Express y NodeJS


## Testeo de la API ECommerce:

1. Descargar el proyecto de GitHub.
2. En la consola, dentro de la carpeta API_eCommerce iniciar: npm start
3. Testear la API con Postman o similar.

### Se crearon dos colecciones: Productos y Ventas (según enunciado),  con la implementación en Mongoose.

```js
const productSchema = mongoose.Schema({
    name: String,
    description: String,
    stock: Number,
    price: Number
});
```

```js
const saleSchema = mongoose.Schema({
    direction: String,
    totalPrice: Number,
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Products' 
    }]
});
```

### <ins>Testeo de API ECommerce:</ins>

### <ins>**Productos:**</ins>

- Obtener todos los productos (GET): http://localhost:8080/productos

- Obtener producto dado su ID (GET): http://localhost:8080/productos/:ID

```js
Por ejemplo para utilizar en Postman:

http://localhost:8080/productos/5fb524f5a106882cc80acf89
```

- Agregar un producto nuevo (POST): http://localhost:8080/productos

```js
Por ejemplo para utilizar en Postman (body > raw > json):
{
    "name": "Nuevo",
    "description": "cerveza nueva",
    "stock": 10,
    "price": 50
}
```

- Modificar un producto dado su ID (PUT): http://localhost:8080/productos/:ID

```js
Por ejemplo para utilizar en Postman (body > raw > json):

http://localhost:8080/productos/5fb524f5a106882cc80acf89

{
    "name": "Nombre modificado",
    "description": "Cerveza modificada",
    "stock": 1000,
    "price": 100
}
```

- Eliminar un producto dado su ID (DELETE): http://localhost:8080/productos/:ID

```js
Por ejemplo para utilizar en Postman:

http://localhost:8080/productos/5fb524f5a106882cc80acf89
```

### <ins>**Ventas:**</ins>

- Obtener todas las ventas (GET): http://localhost:8080/ventas

- Obtener una venta dado su ID (GET): http://localhost:8080/ventas/:ID

```js
Por ejemplo para utilizar en Postman:

http://localhost:8080/ventas/5fb5285a9e8f9620e4415131
```

- Agregar una nueva venta (POST): http://localhost:8080/ventas

```js
Por ejemplo para utilizar en Postman (body > raw > json):
{
    "direction": "Belgrano 128",
    "totalPrice": 130,
    "products": [
        "5fb52519a106882cc80acf8a"
    ]
}
```

- Eliminar una venta dado su ID (DELETE): http://localhost:8080/ventas/:ID

```js
Por ejemplo para utilizar en Postman:

http://localhost:8080/ventas/5fb529119e8f9620e4415132
```
