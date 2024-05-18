import React, { Fragment } from "react";
import ProductoItem from "./ProductoItem";

const Catalogo = () => {
    const productos = [
        { id: 1, nombre: "Camiseta", precio: 20.99 },
        { id: 2, nombre: "Camisa", precio: 35.50 },
        { id: 3, nombre: "Pantalon", precio: 28.50 }
    ]

    return (
        <>
            <h2>Catalogo de Productos</h2>

            {
                productos.length === 0 ? (
                    <p>No hay productos disponibles.</p>
                ):(
                    <div className="productos">
                        {productos.map(
                            (producto) => (
                                <ProductoItem key={producto.id} producto={producto}/>
                            )
                        )}
                    </div>
                )
            }
        </>
    )
}

export default Catalogo;