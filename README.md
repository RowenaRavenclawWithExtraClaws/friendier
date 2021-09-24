# Friendier

Friendier is web app that is designed to connect people together.

## Installation and Running

Just clone the repo and run `npm install` followed by `npm start`

## Features

- Add people (stored in-memory with Redux)
- Connect any two people (make them friends)
- Find connections between people

## Technologies used

- React `17.0.2`
- TypeScript `4.4.3`
- Bootstrap `5.1.1`

## TS types

- Handler `() => void`

- HandlerWithParam `(param: string) => void`

- ButtonProps `{ text: string; styleClass: string; handler: Handler; }`

- Person `{ firstName: string; lastName: string; email: string; friends: Array<number>; }`

- TableProps `{ people: Array<Person>; showFriends: boolean; }`

- ModalProps `{ isOpen: boolean; toggle: Handler; }`

- FormProps `{ emailSetter: HandlerWithParam; firstNameSetter: HandlerWithParam; lastNameSetter: HandlerWithParam; }`

## Components structure

## Core feature (Find connections)

Finding connections between two people is the main purpose of this app. Using the depth-first traversal algorithm, the app can find a connection between any two people using their emails. Here is the people's graph you will find in the app:

## Downsides

- The app does not find all connections or the shortest one, it just finds a connection.
- Redux store is not implemented with TypeScript.
