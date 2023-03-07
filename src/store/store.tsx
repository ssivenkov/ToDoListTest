import AsyncStorage from '@react-native-async-storage/async-storage';
import { appReducer } from '@store/reducers/appReducer/appReducer';
import { tasksReducer } from '@store/reducers/tasksReducer/tasksReducer';
import { usersReducer } from '@store/reducers/usersReducer/usersReducer';
import { AppRootStateType, RootStateType } from '@store/types';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const rootReducer = combineReducers<RootStateType>({
  status: appReducer,
  tasks: tasksReducer,
  users: usersReducer,
});

const persistConfig = {
  StateReconciler: autoMergeLevel2,
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer<AppRootStateType>(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  /*composeEnhancers(applyMiddleware(sagaMiddleware)),*/
);

export const persistor = persistStore(store);
