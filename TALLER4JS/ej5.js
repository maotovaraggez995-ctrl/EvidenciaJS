// Clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Clase Pedido (contiene una lista de productos)
class Pedido {
  constructor() {
    this.productos = []; // lista de productos
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce((suma, p) => suma + p.precio, 0);
  }

  mostrarPedido() {
    return this.productos.map(p => `${p.nombre} - $${p.precio}`).join("\n");
  }
}

//  PRUEBA 
const pedido = new Pedido();
pedido.agregarProducto(new Producto("Camiseta", 50000));
pedido.agregarProducto(new Producto("Zapatos", 120000));

console.log("Productos del pedido:");
console.log(pedido.mostrarPedido());
console.log("Total:", pedido.calcularTotal());
