import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
// imports for modals
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Cards from '../components/Cards';
import { addImageApi, getImageApi } from '../service/allApi';


function Home() {

  const [addStatus, setAddStatus] = useState({})

  const [deleteStatus, setDeleteStatus] = useState([])

  //modal 
  const [show, setShow] = useState(false);
  const [images, setImages] = useState({
    caption: "",
    imgUrl: ""

  })
  console.log(images);
  const handleCancel = () => {
    setImages({
      caption: "",
      imgUrl: ""
    })
  }

  const handleClose = () =>{
    setShow(false);
    handleCancel()
  } 
  const handleShow = () => setShow(true);
  const handleAdd = async () => {
    const { caption, imgUrl } = images
    if (!caption || !imgUrl) {
      alert('Please fill the form properly')
    } else {
      const result = await addImageApi({ caption, imgUrl })
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert(`Image is added`)
        setAddStatus(result)
        handleClose()
      }
    }
  }
  //state 
  const [imagess, setimagess] = useState([])
  const getAllImages = async () => {
    const result = await getImageApi()
    console.log(result);
    setimagess(result.data)

  }
  console.log(imagess);

  useEffect(() => {
    getAllImages()
  }, [addStatus, deleteStatus])

  return (
    <>
      <div className="container-fluid pt-4 pb-4 " id='homemaindiv'>
        {/* modal */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "700", color: "rgb(46, 117, 232)" }}>Add Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input value={images.caption} onChange={(e) => setImages({ ...images, caption: e.target.value })} type="text" className='form-control text-primary' placeholder='Image Title' /> <br />
            <input value={images.imgUrl} onChange={(e) => setImages({ ...images, imgUrl: e.target.value })} type="text" className='form-control text-primary' placeholder='Image Url' />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAdd} setAddStatus={setAddStatus}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="conatiner-fluid">


          <div className="row mt-5 mb-4">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <h1 style={{ fontWeight: "700" }}>Create your own <span className='text-primary'> Gallery</span> </h1>
              <h3 style={{ fontWeight: "600" }}>Click Here for Add  <span className='text-primary'>Images </span> </h3><button onClick={handleShow} style={{ display: "inline-block", height: "40px", width: "45px", border: "0px", backgroundColor: "white" }}><FontAwesomeIcon icon={faFolderPlus} id='addlogo' /></button></div>
            <div className="col-md-2"></div>
          </div>
          {imagess?.length > 0 ?
            <div className="conatiner-fluid">
              <div className="row">

                {imagess?.map((item) => (
                  <div className="col-md-3 mt-3 "> <div className='cardmaindiv'><Cards images={item} addStatus={addStatus} setDeleteStatus={setDeleteStatus} /> </div></div>))}

              </div>
            </div>
            :
            <div className="conatiner-fluid mt-5 mb-5 text-center">
              <h1 style={{ fontFamily: "monospace", fontWeight: "bold", textShadow: "0px 0px 4px blue" }} className='text-primary'>A blank canvas, waiting to be filled with beauty.</h1>
              <img src="https://www.pngitem.com/pimgs/m/251-2518917_ui-system-apps-by-blackvariant-gallery-icon-png.png" alt="" style={{ height: "250px", marginTop: "30px" }} />
            </div>}

        </div>

      </div>
    </>
  )
}

export default Home