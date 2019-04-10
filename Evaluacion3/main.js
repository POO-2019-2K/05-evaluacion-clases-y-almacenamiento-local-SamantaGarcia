import Producto from "./Producto.js"
import Inventario from "./Inventario.js"

class Main {
    constructor(){
        let inv = new Inventario( document.querySelector("#info"));

        document.querySelector("#btnE").addEventListener("click", () => {
            let form = document.querySelector("#form");

            let nInventario = document.querySelector("#nInventario").value;
            let nombre = document.querySelector("#nombre").value;
            let cantidad = document.querySelector("#cantidad").value;
            let costo = document.querySelector("#costo").value;

            let objProducto = {
                nInventario: nInventario,
                nombre: nombre,
                cantidad: cantidad,
                costo : costo
              };
      
              let producto = new Producto(objProducto);
      
              inv.agregarProducto(producto);
        });

        document.querySelector("#btnS").addEventListener("click", () => {
            let form = document.querySelector("#form");

            let nInventario = document.querySelector("#nInventario").value;
            let nombre = document.querySelector("#nombre").value;
            let cantidad = document.querySelector("#cantidad").value;
            let costo = document.querySelector("#costo").value;

            let objProducto = {
                nInventario: nInventario,
                nombre: nombre,
                cantidad: cantidad,
                costo : costo
              };
      
              let item = new Producto(objProducto);
      
              inv.eliminarProducto(item);
        });
    }
}
let m = new Main();