import React, {useState} from 'react';
const Login = () => {
        const [user,setUser]=useState("");
        const [password,setPassword]=useState("");
        const [userErr,setUserErr]=useState(false);
        const [passErr,setPassErr]=useState(false);
    
      const loginHandle=(e) =>
        {
            if(user.length<3 || password.length<3)
            {
                alert("type correct values")
            }
            else
            {
                alert("all good :)")
            }
    
            e.preventDefault()
        }
        const userHandler=(e) => {
            let item=e.target.value;
            if(item.length<3 )
            {
               setUserErr(true)
            }
            else
            {
                setUserErr(false)
            }
            setUser(item)
        }
        const passwordHandler=(e) => {
            let item=e.target.value;
            if(item.length<3 )
            {
               setPassErr(true)
            }
            else
            {
                setPassErr(false)
            }
            setPassword(item)
    
        }
    return ( 
        <div className="login-form">
             <h1><b>Login</b></h1>
           <form onSubmit={loginHandle}>
           User Name:<input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
            <br /> <br />
            Password:<input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}

            <br /> <br />
            <button type="submit"  >Login</button>
            
           </form>
        </div>
     );
}
 
export default Login;