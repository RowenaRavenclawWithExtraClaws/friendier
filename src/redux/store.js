import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./peopleSlice";
import personReducer from "./personSlice";
import isFriendsModalOpenReducer from "./isFriendsModalOpenSlice";
import isAddPersonModalOpenReducer from "./isAddPersonModalOpenSlice";

const store = configureStore({
  reducer: {
    people: peopleReducer,
    person: personReducer,
    isFriendModalOpen: isFriendsModalOpenReducer,
    isAddPersonModalOpen: isAddPersonModalOpenReducer,
  },
});

export default store;
