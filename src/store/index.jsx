import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { PERSIST_REDUX_KEY, ROOT_PERSIST_KEY } from "./constants";
import storage from "redux-persist/lib/storage";
import { clear, removeItem } from '../utilities/storage';
import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import loginReducer from '@/pages/Login/loginSlice'
// import employeeReducer from '../screen/Employee/employeeSlice';


const persistConfig = {
    key: ROOT_PERSIST_KEY,
    storage,
    version: 1
}

const appReducers = combineReducers({
    login: loginReducer
})


const rootReducer = (state, action) => {
    // if (action.type === HANDLE_LOGOUT) {
    //     removeItem(PERSIST_REDUX_KEY)
    //     clear()
    //     state = undefined
    // }
    return appReducers(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        }),
})

export const dispatch = store.dispatch

export default store