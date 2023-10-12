import React from 'react';

function Login() {
  const redirectToBitbucket = () => {
    // Redirect the user to the Bitbucket OAuth authorization URL
    window.location.href = 'https://bitbucket.org/site/oauth2/authorize?client_id=kTe78arDxtHRHTzTqU&response_type=token';
  };

  return (
    <div>
      <button onClick={redirectToBitbucket}>Login with Bitbucket</button>
    </div>
  );
}

export default Login;
