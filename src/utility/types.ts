type Handler = () => void;

export interface ButtonProps {
  text: string;
  styleClass: string;
  handler: Handler;
}

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  friends: Array<Person>;
}

export interface TableProps {
  people: Array<Person>;
}
