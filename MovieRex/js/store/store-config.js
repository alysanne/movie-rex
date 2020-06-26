import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { watchlistReducer } from './redux-reducers.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, watchlistReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
