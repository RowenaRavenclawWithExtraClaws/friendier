import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { FormProps } from "../utility/types";

const ConnectForm = (props: FormProps) => {
  return (
    <>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>First email</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Enter email"
          onInput={(e) => props.emailSetter(e.currentTarget.value)}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Second email</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Enter email"
          onInput={(e) => props.firstNameSetter(e.currentTarget.value)}
        />
      </InputGroup>
    </>
  );
};

export default ConnectForm;
