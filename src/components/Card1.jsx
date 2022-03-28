import React, { memo, Fragment } from 'react';
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit';
import './styles/Card1.css'

const Card1 = (props) => {
    return ( 
        <Fragment>
            <MDBCard style={{ width: props.remWidth }}>
                <MDBCardImage src={props.imgsrc} alt='...' position='top' />
            </MDBCard>
        </Fragment>
    
    );
}


export default memo(Card1);
