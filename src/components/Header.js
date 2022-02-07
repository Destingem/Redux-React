import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch()
  function logoutHandler(){
    dispatch(authActions.false())
  }
  const auth = useSelector(state => { return state.auth.isAuthenicated})
  return (
    
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          {auth ? <li>
            <button onClick={logoutHandler}>Logout</button>
          </li> : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
