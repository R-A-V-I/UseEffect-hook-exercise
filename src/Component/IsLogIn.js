import './login.css'
// import { useState } from 'react';
function IsLogIn(props){
        // let[loginTure,updatestate]=useState(true)
        //     function onEmailEventHandler(event){
        //         console.log(event.target.value)
            
        // }
        // inLoginhHandler(){
        //     props.onLogin
        // }
    return(

        <div className='form-wrapper'>
            {/* <form onsubmit> */}
                <div  className="log-form">

                    <div className='userid'>
                        <label htmlFor="email">
                            Email id
                        </label>
                            <input id="email" placeholder="abc@gmail.com" ></input>
                    </div>
                    <div className='userpassword'>
                        <label htmlFor="Password" >
                                Password 
                        </label>
                            <input type={'password'} id="Password" placeholder=" Please enter at least 7 character"></input>
                    </div>
                    <div className='logsubmit'>
                    <button onClick={props.OnLogin}>Log In</button>
                    </div>
                    

                </div>
            {/* </form> */}

            
        </div>
    )
}
export default IsLogIn;