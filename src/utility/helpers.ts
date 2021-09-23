import { Person } from "./types";

export const getFriends = (
  friendIndexes: Array<number>,
  people: Array<Person>
) => friendIndexes.map((indx) => people[indx]);
