import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function ListaCarrito(){

    const {data, setData} = useContext(DataContext);

    const removerItem = (event) =>{
        const id = event.id;
        setData(prevData => prevData.map(
            item => item.id === id ?{
                ...item, status:'un-selected'
            } : item
        ));
    }

    const filteredItems = data.filter(item => item.status === 'selected')

    return(
        <div className="col">
            <h2>Shopping Cart</h2>

            {
                data.length === 0 ? (
                    <p>No hay productos añadidos al carrito.</p>
                ):(
                    <div className="col-md-3 border-start border-4 border-secondary">
                        <div className="sticky-top">
                            <ul>
                                {filteredItems.map(
                                    (producto) => (
                                        <div key = {producto.id} className="card">
                                        <div className="item">
                                            <h2>{producto.nombre}</h2>
                                            <p>
                                                ${producto.precio}
                                            </p>
                                            <button className="remove" onClick={() => {removerItem(producto)}}>
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ListaCarrito;