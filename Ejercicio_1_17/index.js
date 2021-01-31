'use strict';
  
class Cliente {
    constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
    }
  }
  
  class Elemento {
    constructor(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }
  
  class Factura {
    constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 21,
        total:0,
        formaPago: "efectivo"
      };
  
      this.calculaTotal = () => {
        for (var i = 0; i <this.elementos.length; i++) {
          this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }
  
      this.mostrarTotal = function () {
        this.calculaTotal();
        alert("El total de los productos es = " + this.informacion.total + " euros");
      }
    };
  }
  
  const Cliente1 = new Cliente("Azucena", "Mazarrón", "123456789", "123465798P");
  const arrayElementos = [new Elemento("Producto 1", 1, 3), new Elemento("Producto 2", 2, 12), new Elemento("Producto 3", 1, 15)];
  const facturaFinal = new Factura(Cliente, arrayElementos);
  facturaFinal.mostrarTotal();