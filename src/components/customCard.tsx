import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Person } from "../utility/types";
import CustomTable from "./customTable";

const CustomCard = () => {
  const people = [
    {
      firstName: "Bobby",
      lastName: "Fischer",
      email: "bobby.fish@yahoo.com",
    } as Person,
    {
      firstName: "Vishwanathan",
      lastName: "Anand",
      email: "vishy.anand@gmail.com",
    } as Person,
    {
      firstName: "Paul",
      lastName: "Morphy",
      email: "paul.kinggambit@yahoo.com",
    } as Person,
  ];

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
