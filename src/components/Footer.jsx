import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
   <div className="container-fluid pt-4 pb-4 ">
   <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4 d-flex justify-content-center gap-2"><div className='footersubdiv'><FontAwesomeIcon icon={faSquareFacebook}  className='footerlogos'/></div>
           <div className='footersubdiv'><FontAwesomeIcon icon={faSquareInstagram} className='footerlogos' /></div>
          <div className='footersubdiv'><FontAwesomeIcon icon={faSquareXTwitter}  className='footerlogos'/></div>
            <div className='footersubdiv'><FontAwesomeIcon icon={faSquareWhatsapp}  className='footerlogos'/></div></div>
    <div className="col-md-4"></div>
   </div>
   </div>
    </>
  )
}

export default Footer




