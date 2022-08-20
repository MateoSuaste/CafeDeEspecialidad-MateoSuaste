import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../style/style.css";


export const FormCart =  ({handleClose, show})=> {
const [name, setName] = useState('')
const [apellido, setApellido] = useState("")
const [email, setEmail] = useState('')
const validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;




const validation = (name,email,apellido)=>{
  if(name.length<4)
  return 'Nombre invalido';
  if(apellido.length<5)
  return "Apellido invalido";
  if(!validarEmail.test(email))
  return "Email invalido";
  
 }

const messageError = validation(name, email, apellido)

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Completa el formulario con tus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={evt =>{
            evt.preventDefault();

          }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Mateo"
                autoComplete='off'
                onChange={evt => setName(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido</Form.Label>
              <input
                type="text"
                name='apellido'
                value={apellido} 
                placeholder="Suaste"
                autoComplete='off'
                onChange={evt => setApellido(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                name='email'
                value={email}
                placeholder="lector@gmail.com"
                autoComplete='off'
                onChange={evt => setEmail(evt.target.value)}
              />
            </Form.Group>
            <p>{messageError}</p>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} type='submit' disabled={messageError}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



