import React from "react";
import { useParams } from "react-router-dom";
import Content from "./Contents";
import { useNavigate } from "react-router-dom";

const Producto = () =>{

    const params = useParams();

    const navegar = useNavigate();

    const manejarNavegacion = () => {
        navegar('/')
    }

    return(
        <>
            <h1>{params.nombreParam}</h1>
            <Content/>

            <button onClick={manejarNavegacion}>
                Ir a Home
            </button>
        </>
    )
}

export default Producto;