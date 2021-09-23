import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./peopleSlice";
import personReducer from "./personSlice";
import isFriendsModalOpenReducer from "./isFriendsModalOpenSlice";
import isAddPersonModalOpenReducer from "./isAddPersonModalOpenSlice";
import isConnectModalOpenReducer from "./isConnectModalOpenSlice";

const store = configureStore({
  reducer: {
    people: peopleReducer,
    person: personReducer,
    isFriendModalOpen: isFriendsModalOpenReducer,
    isAddPersonModalOpen: isAddPersonModalOpenReducer,
    isConnectModalOpen: isConnectModalOpenReducer,
  },
});

export default store;
