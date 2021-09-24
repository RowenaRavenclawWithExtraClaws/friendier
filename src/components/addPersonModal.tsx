import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { addPerson } from "../redux/peopleSlice";
import { Notify } from "../utility/helpers";
import { modalStyle } from "../utility/styles";
import { ModalProps } from "../utility/types";
import AddPersonForm from "./addPersonForm";
import CustomButton from "./customButton";

const AddPersonModal = (props: ModalProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const setPersonEmail = (email: string) => setEmail(email);
  const setPersonFirstName = (firstName: string) => setFirstName(firstName);
  const setPersonLastName = (lastName: string) => setLastName(lastName);

  const addNewPerson = () => {
    if (firstName.length && lastName.length && email.length) {
      dispatch(
        addPerson({
          firstName: firstName,
          lastName: lastName,
          email: email,
          friends: [],
        })
      );

      return true;
    }

    return false;
  };

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader style={modalStyle}>Add a new person</ModalHeader>
      <ModalBody style={modalStyle}>
        <AddPersonForm
          emailSetter={setPersonEmail}
          firstNameSetter={setPersonFirstName}
          lastNameSetter={setPersonLastName}
        />
      </ModalBody>
      <ModalFooter style={modalStyle}>
        <CustomButton
          text="Add"
          styleClass="btn-primary"
          handler={() => {
            if (addNewPerson()) {
              Notify("A new person is added", "Congrats", "success");
              props.toggle();
            } else
              Notify("One or all the fields are empty", "Warning", "warning");
          }}
        />
        <CustomButton
          text="Cancel"
          styleClass="btn-secondary"
          handler={props.toggle}
        />
      </ModalFooter>
    </Modal>
  );
};

export default AddPersonModal;
