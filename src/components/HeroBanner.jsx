import React, { memo, Fragment } from 'react';
import "./styles/HeroBanner.css"
import logo from '../images/svg/LogoDarksvg.svg';

const HeroBanner = () => {
    return ( 
        <Fragment>
        <div className="banner-img">
            <img src={logo} className="animate__fadeIn logo"></img>
            <div className="banner-txt">
                <div className="scrolldown animate__bounceInUp"></div>
            </div>
        </div>
        </Fragment>
     );
}
 
export default memo(HeroBanner);
