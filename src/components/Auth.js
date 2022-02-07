import classes from './Auth.module.css';
import store, {authActions} from "../store/index"
import { useDispatch } from 'react-redux';



const Auth = () => {
  const dispatch = useDispatch()
  
  function submitHandle(props){
    console.log(props);
    props.preventDefault()
    let email = props.target[0].value
    let pass = props.target[1].value
    console.log(email);
    console.log(pass);
    if (email.includes("@") && pass.length > 5) {
      console.log("Success")
      dispatch(authActions.true())
    
    } else{
      console.log("Email:" + email.includes("@"));
      console.log("Pass: " + pass.length < 5);
    }
    }
    
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandle}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
