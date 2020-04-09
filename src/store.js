import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import summeryReducer from './reducers/summeryReducer';


const store = createStore(
    combineReducers({
        summery: summeryReducer,
    }),
    applyMiddleware(thunk)
);

export default store;