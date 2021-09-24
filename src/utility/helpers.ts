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

export const findConnetions = (
  people: Array<Person>,
  personIndx1: number,
  personIndx2: number
) => {
  let visited: Array<boolean> = new Array(people.length).fill(false);
  let stack: Array<number> = [];
  let connections: Array<number> = [];
  let connection: Array<number> = [];
  let personIndx: number = -1;

  stack.push(personIndx1);

  while (stack.length !== 0 && personIndx !== personIndx2) {
    personIndx = stack.pop() as number;

    if (!visited[personIndx]) {
      connections.push(personIndx);
      visited[personIndx] = true;
      people[personIndx].friends.forEach((friend) => stack.push(friend));
    }
  }

  const distIndx = connections.indexOf(personIndx2);
  let i = distIndx;

  while (connections[i] !== personIndx1 && i >= 0) {
    connection.unshift(connections[i]);
    i -= 1;
  }

  return [connections[i], ...connection];
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
