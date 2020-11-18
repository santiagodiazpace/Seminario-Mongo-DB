# Seminario MongoDB 2020 - TP Final API ECommerce

Trabajo realizado por Santiago Diaz Pace

Utilizando MongoDB, Express y NodeJS


## Testeo de la API ECommerce:

1. Descargar el proyecto de GitHub.
2. En la consola, dentro de la carpeta API_eCommerce iniciar: npm start
3. Testear la API con Postman o similar.

### Se crearon dos colecciones: Productos y Ventas (seún enunciado),  con la implementación de Mongoose.

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

### <ins>Testeo de API:</ins>

### <ins>**Productos:**</ins>

- Obtener todos los productos (GET): http://localhost:8080/productos

- Obtener producto dado su ID (GET): http://localhost:8080/productos/:ID

- Agregar un producto nuevo (POST): http://localhost:8080/products

```js
Ejemplo para utilizar de Body
{
    "name": "Nuevo",
    "description": "cerveza nueva",
    "stock": 10,
    "price": 50
}
```

- Modificar un producto dado su ID (PUT): http://localhost:8080/productos/:ID

```js
Ejemplo para utilizar de Body
{
    "name": "Product1Modified",
    "description": "Description1Modified",
    "stock": 300,
    "price": 130
}
```

- Eliminar un producto dado su ID (DELETE): http://localhost:8080/productos/:ID



### <ins>**Ventas:**</ins>

- Obtener todas las ventas (GET): http://localhost:8080/ventas

- Obtener una venta dado su ID (GET): http://localhost:8080/ventas/:ID

- Agregar una nueva venta (POST): http://localhost:8080/ventas

```js
Ejemplo para utilizar de Body
{
    "direction": "Alem",
    "totalPrice": 150,
    "products": [
        "5fb1c8d4ed202f2b2c1a14ec"
    ]
}
```

- Eliminar una venta dado su ID (DELETE): http://localhost:8080/ventas/:ID
