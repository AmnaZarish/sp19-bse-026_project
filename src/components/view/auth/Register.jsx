import { common } from '@material-ui/core/colors';
import React, {useState} from 'react';
const Register =() => {
    const [user,setUser]=useState("");
        const [password,setPassword]=useState("");
        const [email,setEmail]=useState("");
        const [phone,setPhone]=useState("");
        
    
      const registerHandle=(e) =>
        {
            e.preventDefault()
        }
        const userHandler=(e) => {
            let item=e.target.value;
            setUser(item)
        }
        const passwordHandler=(e) => {
            let item=e.target.value;
            setPassword(item)
    
        }
        const emailHandler=(e) => {
            let item=e.target.value;
            setEmail(item)
    
        }
        const phoneHandler=(e) => {
            let item=e.target.value;
            setPhone(item)
        }
    return ( 
        <div className="registeration-form">
             <h1><b>Registration</b></h1>
           <form onSubmit={registerHandle}>
           FullName:<input type="text" placeholder="Enter Full Name" onChange={userHandler} />
            <br /> <br />
           Email:   <input type="email" placeholder="Enter User Email" onChange={emailHandler}/>
            <br /> <br />
           Phone No:<input type="phone" placeholder="Enter Phone Number" onChange={phoneHandler}/>
            <br /> <br />
           Password:<input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>
            <br /> <br />
            <button type="submit">Register</button>
           </form>
        </div>
     );
}
 
export default Register;