import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import summeryReducer from './reducers/summeryReducer';
import countryReducer from './reducers/countryReducer';


const store = createStore(
    combineReducers({
        summery: summeryReducer,
        countries: countryReducer,
    }),
    applyMiddleware(thunk)
);

export default store;