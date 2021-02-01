import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk'; // allows you to make async request inside of actions
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer} from './reducers/productReducers';


//combine all reducers
const reducer = combineReducers({

    productList: productListReducer
});

// set initial state for reducers
const initialState = {};

const middleware = [thunk];

//create store
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store


