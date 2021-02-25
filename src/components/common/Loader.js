import React from 'react'

export default function Loader() {
    return (
      <div className="preloader" id="preloader" style={{display: "block"}} >
        <div className="preloader-inner">
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    </div>
    )
}
