import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import AppTitle from "./components/appTitle";
import CustomButton from "./components/customButton";
import { Col, Row } from "reactstrap";
import CustomCard from "./components/customCard";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen, setIsOpen } from "./redux/isFriendsModalOpenSlice";
import {
  selectAddModalIsOpen,
  setAddModalIsOpen,
} from "./redux/isAddPersonModalOpenSlice";
import FriendsModal from "./components/friendsModal";
import AddPersonModal from "./components/addPersonModal";
import {
  selectConnectModalIsOpen,
  setConnectModalIsOpen,
} from "./redux/isConnectModalOpenSlice";
import ConnectModal from "./components/connectModel";
import {
  selectFindModalIsOpen,
  setFindModalIsOpen,
} from "./redux/isFindModalOpenSlice";
import FindModal from "./components/findModal";

const App = () => {
  const isFriendsModalOpen: boolean = useSelector(selectIsOpen);
  const isAddPersonModalOpen: boolean = useSelector(selectAddModalIsOpen);
  const isConnectModalOpen: boolean = useSelector(selectConnectModalIsOpen);
  const isFindModalOpen: boolean = useSelector(selectFindModalIsOpen);

  const dispatch = useDispatch();

  const toggleFriendsModal = () => dispatch(setIsOpen(!isFriendsModalOpen));
  const toggleAddPersonModal = () =>
    dispatch(setAddModalIsOpen(!isAddPersonModalOpen));
  const toggleConnectModal = () =>
    dispatch(setConnectModalIsOpen(!isConnectModalOpen));
  const toggleFindModal = () => dispatch(setFindModalIsOpen(!isFindModalOpen));

  const buttons = [
    {
      text: "Add person",
      styleClass: "btn-primary",
      handler: toggleAddPersonModal,
    },
    {
      text: "Connect people",
      styleClass: "btn-primary",
      handler: toggleConnectModal,
    },
    {
      text: "Find connections",
      styleClass: "btn-primary",
      handler: toggleFindModal,
    },
  ];

  return (
    <div className="app">
      <div className="app-header">
        <AppTitle />
        <Row className="button-row" style={{ marginTop: "2rem" }}>
          {buttons.map((button, indx) => (
            <Col key={indx} lg="4">
              <CustomButton
                text={button.text}
                styleClass={button.styleClass}
                handler={button.handler}
              />
            </Col>
          ))}
        </Row>
        <CustomCard />
        {isFriendsModalOpen ? (
          <FriendsModal
            isOpen={isFriendsModalOpen}
            toggle={toggleFriendsModal}
          />
        ) : null}
        {isAddPersonModalOpen ? (
          <AddPersonModal
            isOpen={isAddPersonModalOpen}
            toggle={toggleAddPersonModal}
          />
        ) : null}
        {isConnectModalOpen ? (
          <ConnectModal
            isOpen={isConnectModalOpen}
            toggle={toggleConnectModal}
          />
        ) : null}
        {isFindModalOpen ? (
          <FindModal isOpen={isFindModalOpen} toggle={toggleFindModal} />
        ) : null}
      </div>
    </div>
  );
};

export default App;
