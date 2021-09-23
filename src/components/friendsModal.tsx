import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { selectPerson } from "../redux/personSlice";
import { modalStyle } from "../utility/styles";
import { FriendsModalProps, Person } from "../utility/types";
import { getFriends } from "../utility/helpers";
import CustomButton from "./customButton";
import CustomTable from "./customTable";
import { selectPeople } from "../redux/peopleSlice";

const FriendsModal = (props: FriendsModalProps) => {
  const person: Person = useSelector(selectPerson);
  const people: Array<Person> = useSelector(selectPeople);

  const friends = getFriends(person.friends, people);

  return (
    <Modal size="lg" isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader
        style={modalStyle}
      >{`${person.firstName} ${person.lastName}`}</ModalHeader>
      <ModalBody style={modalStyle} className="moda-body">
        <CustomTable people={friends} showFriends={false} />
      </ModalBody>
      <ModalFooter style={modalStyle} className="moda-footer">
        <CustomButton
          text="Cancel"
          styleClass="btn-secondary"
          handler={props.toggle}
        />
      </ModalFooter>
    </Modal>
  );
};

export default FriendsModal;
