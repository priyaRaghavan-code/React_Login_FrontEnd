export const isAuthenticated = state => {
  debugger;
  console.log(state.auth.auth.token)
  if (state.auth.auth.token) {
    debugger
    return true;
  }
  else{
    return false;
  }
}

