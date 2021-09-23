import { Table } from "reactstrap";
import { TableProps } from "../utility/types";
import CustomButton from "./customButton";

const CustomTable = (props: TableProps) => {
  return (
    <Table
      borderless
      hover
      style={{ marginTop: "2rem", backgroundColor: "#2f354a" }}
    >
      <thead>
        <tr>
          <th className="th-font-size">#</th>
          <th className="th-font-size">First name</th>
          <th className="th-font-size">Last name</th>
          <th className="th-font-size">Email</th>
          <th className="th-font-size"></th>
        </tr>
      </thead>
      <tbody>
        {props.people.map((person, indx) => (
          <tr key={indx}>
            <th className="th-font-size" scope="row">
              {indx + 1}
            </th>
            <td className="th-font-size">{person.firstName}</td>
            <td className="th-font-size">{person.lastName}</td>
            <td className="th-font-size">{person.email}</td>
            <td className="th-font-size">
              {
                <CustomButton
                  text="Show friends"
                  styleClass="btn-outline-info"
                  handler={() => {}}
                />
              }
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
