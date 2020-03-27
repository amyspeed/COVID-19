import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import apiTestReducer from './reducers/apiTestReducer';
// import impactsReducer from './reducers/impactsReducer';
// import groupsReducer from './reducers/groupsReducer';
// import eventsReducer from './reducers/eventsReducer';


const store = createStore(
    combineReducers({
        // apiTest: apiTestReducer,
        // impacts: impactsReducer,
        // groups: groupsReducer,
        // events: eventsReducer
    }),
    applyMiddleware(thunk)
);

export default store;