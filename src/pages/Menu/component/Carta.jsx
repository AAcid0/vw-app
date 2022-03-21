import React from 'react';
import './carta.css'
import Swal from 'sweetalert2'




const Carta = (props) => {
    
    const handleAlertaInfo = (e) => {
        e.preventDefault();
        Swal.fire({
            icon:"info",
            title: "<p id='titleSwa'>" + props.nombreProducto + "</p>"
            + "<p id='priceSwa'>" + props.precio + "</p>",
            html: "<p id='ingrSwa'>" + props.ingredientes + "</p>" ,
        })
    }
    return ( 
        <div id='produc-carta' className='m-4 shadow-lg mb-5 bg-white rounded'>
            <img src={props.imgsrc}/>
            <div id='capa'>
                <p id='textoP'>{props.nombreProducto}</p>
                <button className='btn btn-primary' style={{"backgroundColor":"#C7A78E"}} onClick={e => handleAlertaInfo(e)}>Ver más</button>
            </div>
        </div>
    );
}
 
export default Carta;