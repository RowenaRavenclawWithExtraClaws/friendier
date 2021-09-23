import toastr from "toastr";
import { Person } from "./types";

export const getFriends = (
  friendIndexes: Array<number>,
  people: Array<Person>
) => friendIndexes.map((indx) => people[indx]);

export const findPersonIndxByEmail = (people: Array<Person>, email: string) => {
  let personIndx = -1;

  people.forEach((person, indx) => {
    if (email === person.email) personIndx = indx;
  });

  return personIndx;
};

// display notification banner
export const Notify = (msg: string, title: string, type: string) => {
  toastr.options = {
    positionClass: "toast-bottom-right",
    newestOnTop: true,
  };

  if (type === "success") toastr.success(msg, title);
  else if (type === "error") toastr.error(msg, title);
  else toastr.warning(msg, title);
};
