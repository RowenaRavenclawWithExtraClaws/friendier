import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./peopleSlice";
import personReducer from "./personSlice";
import isFriendsModalOpenReducer from "./isFriendsModalOpenSlice";

const store = configureStore({
  reducer: {
    people: peopleReducer,
    person: personReducer,
    isFriendModalOpen: isFriendsModalOpenReducer,
  },
});

export default store;
