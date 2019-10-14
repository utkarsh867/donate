import React from 'react'
import logo from '../img/qrcode.jpg'
const QRCode = () =>  {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={logo} height={400}/>
        </div>
    )
};

export default QRCode;