import './login.css'
function IsLogIn(props){
        
    return(

        <div className='form-wrapper'>
            
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
           

            
        </div>
    )
}
export default IsLogIn;
