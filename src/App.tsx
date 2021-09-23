import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppTitle from "./components/appTitle";
import CustomButton from "./components/customButton";
import { Col, Row } from "reactstrap";
import CustomCard from "./components/customCard";

function App() {
  const buttons = [
    { text: "Add person", styleClass: "btn-primary", handler: () => {} },
    { text: "Make friends", styleClass: "btn-primary", handler: () => {} },
    { text: "Find connections", styleClass: "btn-primary", handler: () => {} },
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
      </div>
    </div>
  );
}

export default App;
