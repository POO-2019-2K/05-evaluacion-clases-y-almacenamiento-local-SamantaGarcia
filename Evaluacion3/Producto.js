export default class Producto{
    constructor(producto){
        this._nInventario = producto.nInventario;
        this._nombre = producto.nombre;
        this._cantidad = producto.cantidad;
        this._costo = producto.costo;
    }

    get nInventario(){
        return this._nInventario;
    }

    get nombre(){
        return this._nombre;
    }

    get cantidad(){
        return this._cantidad;
    }

    get costo(){
        return this._costo;
    }

    
}