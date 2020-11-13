import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App/index';
import * as serviceWorker from './serviceWorker';
import configg from './config';

import {createStore,applyMiddleware,compose} from "redux";
import mainreducer from "./Firebase/reducer/mainreducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore,createFirestoreInstance } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';
import fbConfig from "./Firebase/Fire";
import firebase from "firebase/app";

const store =createStore(mainreducer,
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebase,fbConfig)
    )
    );
    const config = {
      userProfile: 'users', // where profiles are stored in database,
      useFirestoreForProfile: true
    };
   const rrfProps = {
        firebase,
        config,
        dispatch: store.dispatch,
        createFirestoreInstance // <- needed if using firestore
      }
      function AuthIsLoaded({ children }) {
        const auth = useSelector(state => state.firebase.auth)
        if (!isLoaded(auth)) return <div>Loading Screen...</div>;
            return children
    }
    
const app = (

    <Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><AuthIsLoaded>
        <BrowserRouter basename={configg.basename}>
            {/* basename="/datta-able" */}
            <App />
        </BrowserRouter></AuthIsLoaded></ReactReduxFirebaseProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
