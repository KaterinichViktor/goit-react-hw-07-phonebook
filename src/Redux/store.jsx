// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore } from 'redux-persist';

import contactsReducer from './contactsSlice';
// import persistConfig from './persistConfig';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
