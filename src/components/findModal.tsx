import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { selectPeople } from "../redux/peopleSlice";
import { findConnetion, findPersonIndxByEmail } from "../utility/helpers";
import { modalStyle } from "../utility/styles";
import { ModalProps, Person } from "../utility/types";
import ConnectForm from "./connectForm";
import CustomButton from "./customButton";

const FindModal = (props: ModalProps) => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [message, setMessage] = useState("");
  const [connection, setConnection] = useState([] as Array<number>);
  const people: Array<Person> = useSelector(selectPeople);

  const setFirstEmail = (email1: string) => setEmail1(email1);
  const setSecondEmail = (email2: string) => setEmail2(email2);

  const findConnectionHandler = () => {
    const personIndx1 = findPersonIndxByEmail(people, email1);
    const personIndx2 = findPersonIndxByEmail(people, email2);

    if (personIndx1 !== -1 && personIndx2 !== -1) {
      const connection = findConnetion(people, personIndx1, personIndx2);

      if (connection.length) setConnection([...connection]);
      else setMessage("No connection found!");
    } else {
      setConnection([]);
      setMessage("No connection found, maybe you entered wrong emails!");
    }
  };

  return (
    <Modal isOpen={props.isOpen}>
      <ModalHeader style={modalStyle}>
        Find connections
        <p className="font-size-small text-muted">
          search for all possible connections (or the lack of it) between two
          people
        </p>
      </ModalHeader>
      <ModalBody style={modalStyle}>
        <ConnectForm
          emailSetter={setFirstEmail}
          firstNameSetter={setSecondEmail}
          lastNameSetter={() => {}}
        />
      </ModalBody>
      <ModalBody style={modalStyle}>
        <div>
          <h6>Connection: </h6>
          {connection.length ? (
            <p style={{ textAlign: "center" }}>
              {connection.map(
                (personIndx, indx) =>
                  `${people[personIndx].firstName} ${
                    people[personIndx].lastName
                  } ${indx < connection.length - 1 ? "--> " : ""} `
              )}
            </p>
          ) : message.length ? (
            <p style={{ textAlign: "center" }}>{message}</p>
          ) : null}
        </div>
      </ModalBody>
      <ModalFooter style={modalStyle}>
        <CustomButton
          text="Find"
          styleClass="btn-primary"
          handler={findConnectionHandler}
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

export default FindModal;
