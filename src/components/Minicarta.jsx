import React, { memo, Fragment, useState } from 'react';
import CartaItem from './CartaItem.jsx';
import './styles/Minicarta.css'
import Menu from '../infoPlatos/Menu.json'
import { v4 as uuidv4 } from 'uuid';

const Minicarta = () => {
    const [tipoPlato, settipoPlato] = useState(""); //titulo debajo de un poco de lo nuestro, cambia con click al nav

    const handleCLick = (e, plato) => {
        e.preventDefault();
        settipoPlato(plato);
    }
    
    const renderiza = (plato) => {
        let listaElem = Menu.filter(function(item) {
            return item.tipo == plato
        })
         return(
             <Fragment>
                <div className="primerTab">
                    <p className='altText tipo-plato'>- {listaElem[0].titulo} -</p>
                    <div className='row'>
                    {listaElem.map(item => <CartaItem key={uuidv4()} imgsrc={item.imgurl} title={item.nombre} price={item.precio} dscr={item.ingredientes}/>)}
                    </div>
                </div>
             </Fragment>
        )
    }

    return ( 
        <Fragment>
            <div className="hero-menu wrapper">
                <div className='container'>
                    <p className='mainText display-1 text-center py-2'>UN POCO DE LO NUESTRO</p>
                    <p id='flechita' className="bi bi-arrow-down-circle  text-center"></p>
                </div>
                <div className='container d-flex justify-content-center'>
                    <ul id='navBarMiniCarta' className="">
                        <li className="mx-4">
                            <button className="p-2 border border-dark" onClick={e => handleCLick(e, "waffle")}>Waffles</button>
                        </li>
                        <li className="mx-4">
                            <button className="p-2 border border-dark" onClick={e => handleCLick(e, "adicion")}>Adiciones</button>
                        </li>
                        <li className="mx-4">
                            <button className="p-2 border border-dark text-nowrap" onClick={e => handleCLick(e, "desa_pos")}>Desayunos Y Postres</button>
                        </li>
                        <li className="mx-4">
                            <button className="p-2 border border-dark" onClick={e => handleCLick(e, "decora")}>Decoraciones</button>
                        </li>
                    </ul>
                </div>
                <div className="tabs-container">
                    <div className="tab1">
                        {
                            tipoPlato ? renderiza(tipoPlato) : (<p className="textoDiv">Échale un vistazo a nuestro menú</p>)
                        }
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Minicarta;
