import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import mylogger from "./middleware/myLogger";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger, mylogger))
export default store