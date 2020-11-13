
const initstate={authError: null};
const authreducer=(state=initstate,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
          console.log('login error');
          return {
            ...state,
            authError: 'Login failed'
          }
        case 'LOGIN_SUCCESS':
          console.log('login success');
          return {
            authError: null
          }
          case 'RESET_ERROR':
            console.log('RESET ERROR');
            return {
              ...state,
              authError: 'RESET ERROR'
            }
          case 'RESET_SUCCESS':
            console.log('RESET success');
            return {
              authSuccess: "Check your Email Inbox"
            }
            case 'VERIFY_ERROR':
              console.log('VERIFY ERROR');
              return {
                ...state,
                authError: 'Verification Link not Sent'
              }
            case 'VERIFY_SENT':
              console.log('Verification link sent');
              return {
                authSuccess:"Verification Link Sent"
              }
          case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
            case 'SIGNUP_SUCCESS':
      console.log('signup success');
     
      return {
        ...state,
        authError: null,
        authSuccess:"Account Created"
       
      }
    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }
        default:
          return state
      }

};
export default authreducer;
