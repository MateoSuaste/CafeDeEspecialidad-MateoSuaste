import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const DropdownNav = ()=> {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="success"> <Link to='/category/Cafe de Especialidad'className="origenLink">Cafe de Especialidad</Link></Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item> <Link to='/origin/Guatemala'className="origenLink">De Guatemala</Link></Dropdown.Item>
        <Dropdown.Item> <Link to='/origin/Etiopia'className="origenLink">De Etiopia</Link></Dropdown.Item>
        <Dropdown.Item> <Link to='/origin/Colombia'className="origenLink">De Colombia</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownNav;