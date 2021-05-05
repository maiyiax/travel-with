import './App.css';
import {Login, Signup} from "./components/Forms";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      {/*going to input logIn/signUp here */}
      {/* <Login /> */}
      <Signup />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
