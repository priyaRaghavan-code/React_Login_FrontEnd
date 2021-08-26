import SignUp from "../services/AuthService";

export const SIGNUP_CONFIRMED_ACTION = '[signip action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signip action] failed signup';


export function SignUpAction(name,username,email,password,password_confirmation){
  return (dispatch) => {
    debugger;
    SignUp(name,username,email,password,password_confirmation).then(response => {
        dispatch(confirmedSignUpAction(response.data));
        console.log(response)
    });
    }
}

export function confirmedSignUpAction(payload){
    return {
      type: SIGNUP_CONFIRMED_ACTION,
      payload,
    }
}