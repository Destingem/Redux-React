import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import styles from "../src/App.module.css"
import { useSelector, useDispatch } from "react-redux";
import { paragraphActions } from "./store";
function App() {
  const dispatch = useDispatch()
  let auth = useSelector((state) => {
     return state.auth.isAuthenicated;
  });
  let paragraph = useSelector(state => {return state.paragraph})
  console.log(auth);
  function changeHandler(props){
    dispatch(paragraphActions.set({value: props.target.value}))
  }
  return (
    <>
      <Header />
      {auth ? <Counter /> : null}
      {auth ? null : <Auth />}
      <div className={styles.input_text_div}>
      {paragraph ? <h3 className={styles.input_paragraph}>{paragraph}</h3> : null}
      <input onChange={changeHandler}></input>
      </div>
    </>
  );
}

export default App;
