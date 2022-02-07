import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector, useDispatch } from "react-redux";
function App() {
  let auth = useSelector((state) => {
     return state.auth.isAuthenicated;
  });
  console.log(auth);
  return (
    <>
      <Header />
      {auth ? <Counter /> : null}
      {auth ? null : <Auth />}
    </>
  );
}

export default App;
