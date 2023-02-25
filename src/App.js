// import logo from './logo.svg';
import './App.css';
// import UseEffectDemo from './Component/UseEffectDemo';
import MainHeader from './Component/MainHeader';
import IsLogIn from './Component/IsLogIn';
import Home from './Component/Home';
import { useState } from 'react';



function App() {

  let[isLogIn,updateLogIn]=useState(false)
 let loginhandler=()=>{
    updateLogIn(true);
  }
  let logouthandler=()=>{
    updateLogIn(false);
  }


  return ( <div className='container'>
    <MainHeader onlogin={isLogIn} onLogout={logouthandler}></MainHeader>
    {!isLogIn && <IsLogIn OnLogin={loginhandler}></IsLogIn>}
    {isLogIn && <Home onLogout={logouthandler}></Home>}
    {/* <IsLogIn></IsLogIn> */}
    {/* <Home></Home> */}
    </div>


  )
}

export default App;
