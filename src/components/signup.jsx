import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { register } from '../redux/user-reducer/userAction';


const SignUp = () => {

    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords not matching");
        }else {
            dispatch(register(email, password));
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <div>
            <h1>Sign Up</h1>
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
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="re-enter password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}>                            
        </Form.Control>
        </Form.Group>
        <Button type="submit" variant="dark">Login</Button>
    </Form>
       
        </div>
    );
};

export default SignUp;