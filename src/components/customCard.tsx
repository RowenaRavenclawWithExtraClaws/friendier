import { useSelector } from "react-redux";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { selectPeople } from "../redux/peopleSlice";
import { Person } from "../utility/types";
import CustomTable from "./customTable";

const CustomCard = () => {
  const people = useSelector(selectPeople) as Array<Person>;

  return (
    <Card
      style={{
        backgroundColor: "#2f3542",
        width: "80%",
        marginTop: "2rem",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">People's list</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          shows all people registered in the system
        </CardSubtitle>
        <CustomTable people={people} />
      </CardBody>
    </Card>
  );
};

export default CustomCard;
