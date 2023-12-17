import { configureStore } from '@reduxjs/toolkit';
// import messagesReducer from './slices/messages/messagesReducer'
// import authReducer from './slices/auth/authReducer'
import authReducer from './slices/auth';
import culturesReducer from "./slices/cultures";
import recReducer from './slices/recpmindation';
import legalsReducer from "./slices/legals";
import novostiReducer from "./slices/novosti";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    recSlice: recReducer,
    culturesSlice: culturesReducer,
    legalsSlice: legalsReducer,
    novostiSlice: novostiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
