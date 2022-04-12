import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Picker(props){
  return(
    <div>
         <div className="mb-2">
  
      <DropdownButton
        as={ButtonGroup}
        id={`dropdown-button-drop`}
        drop={"direction"}
        variant="secondary"
        title={props.title}
      >
        <Dropdown.Item eventKey="1">9A</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
  </div>

    </div>
  )
}
export default Picker;