export const isAuthenticated = state => {
  console.log(state.auth.auth.token)
  if (state.auth.auth.token) {
    return true;
  }
  else{
    return false;
  }
}

