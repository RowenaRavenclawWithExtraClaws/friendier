import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { connectPeople } from "../redux/peopleSlice";
import { Notify } from "../utility/helpers";
import { modalStyle } from "../utility/styles";
import { ModalProps } from "../utility/types";
import ConnectForm from "./connectForm";
import CustomButton from "./customButton";

const ConnectModal = (props: ModalProps) => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const dispatch = useDispatch();

  const setFirstEmail = (email1: string) => setEmail1(email1);
  const setSecondEmail = (email2: string) => setEmail2(email2);

  const makeFriends = () =>
    dispatch(
      connectPeople({
        email1: email1,
        email2: email2,
      })
    );

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader style={modalStyle}>
        Connect people
        <p className="font-size-small text-muted">
          connect any to people (make them friends) by entering their emails
        </p>
      </ModalHeader>
      <ModalBody style={modalStyle}>
        <ConnectForm
          emailSetter={setFirstEmail}
          firstNameSetter={setSecondEmail}
          lastNameSetter={() => {}}
        />
      </ModalBody>
      <ModalFooter style={modalStyle}>
        <CustomButton
          text="Make friends"
          styleClass="btn-primary"
          handler={() => {
            makeFriends();
            Notify("You make two people friends 👏", "Congrats", "success");
            props.toggle();
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

export default ConnectModal;
