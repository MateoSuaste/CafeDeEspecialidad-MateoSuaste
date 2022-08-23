import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../style/style.css";

export const FormCart = ({ handleClose, show}) => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  const [datas, setDatas] = useState({
    nombre: name,
    apellido: apellido,
    email: email,
  });

  /*
  const validation = (email,name,apellido) => {
    if (name.length < 4) return "Nombre invalido";
    if (apellido.length < 5) return "Apellido invalido";
    if (!validarEmail.test(email)) return "Email invalido";
  };
  const messageError = validation(name, email, apellido);

  */

  

  const handleChange = ( evt) => {
    setDatas({
      ...datas,
      [evt.target.name]: evt.target.value,
    });
  };

  const saveBuyer = (evt) => {
    evt.preventDefault();
    console.log(datas);
    handleClose()
  };


  return (
    <>
      <form onSubmit={saveBuyer}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Completa el formulario con tus datos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <input
                  type="text"
                  required
                  name="nombre"
                  placeholder="Mateo"
                  autoComplete="off"
                  onChange={handleChange}
                 
                />
               
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Apellido</Form.Label>
                <input
                  type="text"
                  required
                  name="apellido"
                  placeholder="Suaste"
                  autoComplete="off"
                  onChange={handleChange}
                  
                />
                
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="lector@gmail.com"
                  autoComplete="off"
                  onChange={handleChange}
                  
                />
                
              </Form.Group>
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};
