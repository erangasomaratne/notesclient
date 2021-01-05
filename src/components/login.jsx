import React , { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/user-reducer/userAction';


const Login = () => {

    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");
    
    const dispatch = useDispatch();

   
   

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email,password));
        setEmail("");
        setPassword("");
        
    }
    return (
        <div>
        <h1>Log In</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="enter email" value={email} onChange={e => setEmail(e.target.value)}>                            
        </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="enter password" value={password} onChange={e => setPassword(e.target.value)}>                            
        </Form.Control>
        </Form.Group>
        <Button type="submit" variant="dark">Login</Button>
    </Form>
        
        </div>
    );
};

export default Login;