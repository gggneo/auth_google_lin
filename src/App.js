import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
function App() {
  return (
    <div className="App">

      <h4> Login with Google and Linkedin</h4>
      <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            shape="circle"
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />

    <LinkedIn
      clientId="86vhj2q7ukf83q"
      redirectUri={`${window.location.origin}/linkedin`}
      onSuccess={(code) => {
        console.log(code);
      }}
      onError={(error) => {
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
      )}
    </LinkedIn>
      
    </div>
  );
}

export default App;
