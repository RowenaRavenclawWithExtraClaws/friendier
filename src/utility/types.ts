type Handler = () => void;
type HandlerWithParam = (param: string) => void;

export interface ButtonProps {
  text: string;
  styleClass: string;
  handler: Handler;
}

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
  friends: Array<number>;
}

export interface TableProps {
  people: Array<Person>;
  showFriends: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  toggle: Handler;
}

export interface FormProps {
  emailSetter: HandlerWithParam;
  firstNameSetter: HandlerWithParam;
  lastNameSetter: HandlerWithParam;
}
