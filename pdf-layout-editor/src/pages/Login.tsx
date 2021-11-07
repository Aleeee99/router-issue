function Login() {
  return (
    <div>
      Login
      <p><input placeholder='Login'/></p>
      <p><input placeholder='Password'/></p>
      <button onClick={logInToApp}>Login</button>
    </div> 
  );
}

export default Login;

function logInToApp() {
  console.log('hey')
}
