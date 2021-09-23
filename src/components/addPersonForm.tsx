import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { FormProps } from "../utility/types";

const AddPersonForm = (props: FormProps) => {
  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Email</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Enter email"
          onInput={(e) => props.emailSetter(e.currentTarget.value)}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>First name</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Enter first name"
          onInput={(e) => props.firstNameSetter(e.currentTarget.value)}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Last name</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Enter last name"
          onInput={(e) => props.lastNameSetter(e.currentTarget.value)}
        />
      </InputGroup>
    </>
  );
};

export default AddPersonForm;
