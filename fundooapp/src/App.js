import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/signinup/signin';
import Signup from './Pages/signinup/signup';
import Header from './Component/Header/Header';
import Note1 from './Component/Note1/Note1';
import Note2 from './Component/Note2/Note2';
import Note3 from './Component/Note3/Note3';
import Dashboard from './Pages/Dashboard/Dashboard';
import Router1 from './Router/Router';
import Colorpopper from './Component/ColorPopper/Colorpopper';
import Drawwer from './Component/Drawer/Drawwer';

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <Signup /> */}
      {/* <Dashboard /> */}
      {/* <Note3 /> */}
      <Router1/>
      {/* <Drawwer /> */}
      {/* <Colorpopper /> */}
    </div>
  );
}

export default App;
