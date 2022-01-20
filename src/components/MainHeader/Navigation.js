import React, { useContext } from 'react';
import AuthContexts from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {

  const ctx = useContext(AuthContexts);

  return (
    // consumer always takes a child as a functions and as an argument get context data
    // <AuthContexts.Consumer>
    //   {(ctx) => {
    //     return (
          <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    //     )
    //   }}
      
    // </AuthContexts.Consumer>
  );
};

export default Navigation;
