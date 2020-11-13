import projectreducer from "./projectreducer";
import authreducer from "./authreducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import { firebaseReducer } from 'react-redux-firebase'
import reducer from "../../store/reducer";
 const mainreducer=combineReducers({
     reducer:reducer,
    auth:authreducer,
    project:projectreducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
export default mainreducer;