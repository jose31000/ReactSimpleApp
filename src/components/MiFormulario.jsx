import React, { useState } from "react";

const MiFormulario = () => {

    const [formData, setFormData] = useState({
        username:'',
        email:'ejemplo@ejemplo.com',
        password:'',
    });

    const [formErrors, setFormErrors] = useState({
        username:'',
        email:'',
        password:'',
    });

    const activarPorEvento = (evento) =>{
        console.log("evento activado", evento.type)
    }

    const inputActivado = (evento)=>{
        evento.stopPropagation()
        console.log("input activado", evento.type)
    }

    const formularioActivado = (evento) => {
        evento.stopPropagation()
        console.log("formulario activado", evento.type)
    }

    const procesarCambio = (evento) =>{
        const {name, value} = evento.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]:value,
        }));

        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            [name]:'',
        }));
    }

    const procesarSubmit = (evento) => {
        evento.preventDefault();
        console.log(formData)

        const newFormErrors = {};
        
        if(formData.username.trim() === ''){
            newFormErrors.username = 'El usuario es requerido'
        }

        if(formData.email.trim() === ''){
            newFormErrors.email = 'El email es requerido'
        }

        if(formData.password.trim() === ''){
            newFormErrors.password = 'Password requerida'
        }

        if (Object.keys(newFormErrors).length >0){
            setFormErrors(newFormErrors);
        }else{
            console.log('Formulario valido. Datos;', formData);
        }
    };

    return(
        <div>
            <form autoComplete="off" onClick={formularioActivado} onSubmit={procesarSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="username"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={procesarCambio}
                    />
                    {formErrors.username && <span className="error">{formErrors.username}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={procesarCambio}
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password"
                        id="password"
                        name="password"
                        value = {formData.password}
                        onChange={procesarCambio}
                    />
                    {formErrors.password && <span className="error">{formErrors.password}</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default MiFormulario;