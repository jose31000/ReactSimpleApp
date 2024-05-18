import React, {useState} from "react";


const ContadorClase = () =>{
    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1);
    };

    const reducir = () => {
        setConteo((prevConteo) => prevConteo - 1);
    };

    return(
        <div>
            <h1>Contador de clicks</h1>
            <p>conteo:{conteo}</p>
            <button onClick={incrementar}>Sumar Click</button>
            <button onClick={reducir}>Restar Click</button>
        </div>
    );
}

// class ContadorClase extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             conteo: 0,
//         };
//     }

//     incrementar = () => {
//         this.setState((prevState) => ({conteo: prevState.conteo + 1}));
//     };

//     reducir = () => {
//         this.setState((prevState) => ({conteo: prevState.conteo - 1}));
//     };

//     render(){
//         const {conteo} = this.state;
//         return(
//             <div>
//                 <h1>Contador de clicks</h1>
//                 <p>conteo:{conteo}</p>
//                 <button onClick={this.incrementar}>Sumar Click</button>
//                 <button onClick={this.reducir}>Restar Click</button>
//             </div>
//         );
//     }
// }


export default ContadorClase