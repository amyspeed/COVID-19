import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import summeryReducer from './reducers/summeryReducer';
import countryReducer from './reducers/countryReducer';
import usaSummeryReducer from './reducers/usaSummeryReducer';
import statesReducer from './reducers/statesReducer';


const store = createStore(
    combineReducers({
        summery: summeryReducer,
        countries: countryReducer,
        usaSummery: usaSummeryReducer,
        states: statesReducer
    }),
    applyMiddleware(thunk)
);

export default store;