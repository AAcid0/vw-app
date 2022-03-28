import React, { memo, Fragment } from 'react';
import '../components/styles/CartaItem.css';

const CartaItem = (props) => {
    return ( 
        <Fragment>
            <div className=" menu-item container">
                <hr></hr>
                <div className='row g-0'>
                    <div className='container'>
                        <div className='col-md-1 col-sm-4'>
                            <img  src={props.imgsrc} className="product-img"/>
                        </div>
                        <div className='col-md-11 col-sm-8'>
                            <div className="menu-item-title">
                                <h4 className="tituloProducto mainText"><strong>{props.title}</strong></h4>
                                <span className="precio-item mainText">{props.price}</span>
                            </div>
                            <div className="menu-item-desc">
                                <p>{props.dscr}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default memo(CartaItem);