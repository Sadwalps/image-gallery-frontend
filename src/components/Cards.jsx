import React, { useState } from 'react'
import { Card } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removeImageApi } from '../service/allApi';
function Cards({ images,setDeleteStatus}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = async(id)=>{

        const result = await removeImageApi(id)
        console.log(result);
        if(result.status>=200 && result.status<300){
            setDeleteStatus(result)
        }
    }
    return (
        <>
            <Card style={{ width: '19rem' }} >
                <Card.Img variant="top" src={images?.imgUrl} id='cardi' onClick={handleShow}/>
                <Card.Body>
                    <Card.Title style={{ fontWeight: "700" }}>{images?.caption}</Card.Title>

                    <Button variant="primary" onClick={()=>handleDelete(images?.id)}>Delete</Button>
                </Card.Body>
            </Card>

            {/* modal */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontWeight: "bold" }}>{images?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={images?.imgUrl} alt="" style={{ height: "250px", width: "100%" }}  />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Cards