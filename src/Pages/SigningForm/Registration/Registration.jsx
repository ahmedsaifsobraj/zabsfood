import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import zabsfood5 from "../../../images/zabsfood5.png";
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
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
                    <Form.Group className="mb-3 w-50 mx-auto d-block fw-bold " controlId="formBasicName">
                        <Form.Control className='rounded-pill py-2' type="name" placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto d-block  fw-bold " controlId="formBasicEmail">
                        <Form.Control onChange={(e) => setEmail(e.target.value)} className='rounded-pill py-2' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto d-block  fw-bold " controlId="formBasicPassword">
                        <Form.Control onChange={(e) => setPassword(e.target.value)} className='rounded-pill py-2' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto d-block  fw-bold " controlId="formBasicConfirmPassword">
                        <Form.Control className='rounded-pill py-2' type="password" placeholder="Confirm password" required />
                    </Form.Group>
                    <Button onClick={() => createUserWithEmailAndPassword(email, password)} className='btn btn-dark w-50 mx-auto d-block rounded-pill py-2 fw-bold mys-5' type="button">
                        Register
                    </Button>
                </Form>
            </div>
            
        </div>
    );
}

export default Registration;
