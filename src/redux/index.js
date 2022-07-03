import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import homeRducer from './reducers/homeReduser';
import moviesKPReducer from "./reducers/moviesKP-reducer";
import moviesReducer from "./reducers/moviesReducer";
import top5Reducer from "./reducers/top5Reducer";

const rootRducer = combineReducers({
    home: homeRducer,
    top5Page: top5Reducer,
    moviesKP: moviesKPReducer,
    moviesPage: moviesReducer
})


const store = createStore(rootRducer,applyMiddleware(thunk))

export default store;