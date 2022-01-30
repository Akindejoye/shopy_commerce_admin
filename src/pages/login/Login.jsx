import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password });
    };

    return ( 
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input 
                type="text" 
                placeholder= "username"
                onChange ={(e) => setUsername(e.target.value)}
                style={{padding:'1rem', marginBottom:"2rem"}} 
            />

            <input 
                type="password" 
                placeholder= "password"
                onChange ={(e) => setPassword(e.target.value)}
                style={{padding:'1rem', marginBottom:"2rem"}} 
            />
            <button 
                type="submit" 
                onClick={handleClick}
                style={{padding:'1rem', width:100}}
            >Login</button>
        </div>
     );
}
 
export default Login;