import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContexts from './store/auth-context';

function App() {
  const ctx = useContext(AuthContexts);
  
  return (
    <React.Fragment>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
    </React.Fragment>
  );
}

export default App;
