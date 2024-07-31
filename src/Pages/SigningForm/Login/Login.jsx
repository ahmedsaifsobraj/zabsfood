import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import zabsfood5 from "../../../images/zabsfood5.png";
import auth from '../../../firebase.init';
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if(user){
        navigate('/');
    }
   
    
    return (
        <div className='mb-5'>
            <div className='d-flex justify-content-center'>
                <img height={150} src={zabsfood5} alt="" />
            </div>
            <div className='px-2 mb-5'>
                <Form >
                    <Form.Group className="mb-3 w-50 mx-auto d-block  fw-bold " controlId="formBasicEmail">
                        <Form.Control onChange={(e) => setEmail(e.target.value)} className='rounded-pill py-2' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto d-block  fw-bold " controlId="formBasicPassword">
                        <Form.Control onChange={(e) => setPassword(e.target.value)} className='rounded-pill py-2' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button onClick={() => signInWithEmailAndPassword(email, password)} className='btn btn-dark w-50 mx-auto d-block rounded-pill py-2 fw-bold mys-5' type="button">
                        Login
                    </Button>
                </Form>
            </div>
            
        </div>
    );
}

export default Login;
