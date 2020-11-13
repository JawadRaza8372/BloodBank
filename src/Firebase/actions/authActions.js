export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err, });
      });
  
    }
  }
  export const verification = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      firebase.auth().currentUser.sendEmailVerification().then(function() {
  dispatch({ type: 'VERIFY_SENT' });
})
.catch(function(err) {
  dispatch({ type: 'VERIFY_ERROR', err, });
});  
    }
  }
 
  export const reset=(credentials)=>{
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      firebase.auth().sendPasswordResetEmail(credentials.email)
      .then(() => {
        dispatch({ type: 'RESET_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'RESET_ERROR', err, });
      });
  
    }
  }
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  export const signUps = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then((resp) => {
        return firestore.collection('users').doc(resp.user.uid).set({
          name: newUser.name,
          hospital: newUser.hospital,
          city: newUser.city,
        });
      }
      ).then(()=>{
        firebase.auth().signOut().then(() => {
          dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
        signOut();
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }

