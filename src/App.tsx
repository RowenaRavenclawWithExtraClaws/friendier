import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppTitle from "./components/appTitle";
import CustomButton from "./components/customButton";
import { Col, Row } from "reactstrap";
import CustomCard from "./components/customCard";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen, setIsOpen } from "./redux/isFriendsModalOpenSlice";
import FriendsModal from "./components/friendsModal";

const App = () => {
  const isFriendsModalOpen = useSelector(selectIsOpen) as boolean;
  const dispatch = useDispatch();

  const buttons = [
    {
      text: "Add person",
      styleClass: "btn-primary",
      handler: () => {},
    },
    { text: "Make friends", styleClass: "btn-primary", handler: () => {} },
    { text: "Find connections", styleClass: "btn-primary", handler: () => {} },
  ];

  const toggleFriendsModal = () => dispatch(setIsOpen(!isFriendsModalOpen));

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
      </div>
    </div>
  );
};

export default App;
