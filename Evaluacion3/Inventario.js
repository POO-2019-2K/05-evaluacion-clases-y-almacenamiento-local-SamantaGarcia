import Producto from "./Producto.js"

export default class Inventario{
    constructor(tablaInfo){
            this._tablainfo = tablaInfo;
            this._inventario = [];

            this._iniciarTabla();
           // localStorage.removeItem("inven");
    }

    _iniciarTabla(){
        let lProducto = JSON.parse(localStorage.getItem("inven"));

        if(lProducto === null){
            return;
        }
        lProducto.forEach((e, index) => {
            e.nInventario;
          });
          this._agregarTabla(new Producto(producto));
          console.log(lProducto);
    }

    _agregarTabla(producto){        
    let row = this._tablaInfo.insertRow(-1);

        let cellnI = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellCantidad = row.insertCell(2);
        let cellCosto = row.insertCell(3);

        cellnI.innerHTML = producto.nInventario;
        cellNombre = producto.nombre;
        cellCantidad = producto.cantidad;
        cellCosto = producto.costo;

        let objProducto = {
            nInventario : nInventario,
            nombre : nombre,
            cantidad : cantidad,
            costo : costo
          };

          this._inventario.push(objProducto);
    }

    _encontrarP(nInventario){
        let encontrar = -1; //solo lo encuentra desde el 0 en adelante. Por eso se inicializa como -1
        this._inventario.forEach((e, index) => {
          if (e.nInventario === nInventario) {
            encontrar = index;
            return;
          }
        });
        return encontrar;
      }

      agregarProducto(producto) {
        //buscar empleado:
        // let encontrado = this._encontrarP(producto.nInventario);
        // if (encontrado >= 0) {
          
        //   return;
        // }
        this._agregarTabla(producto);
        console.log(this._inventario);
        localStorage.setItem("inven", JSON.stringify(this._inventario));
    
      }

      eliminarProducto(item){
        localStorage.removeItem(item);
      }
}