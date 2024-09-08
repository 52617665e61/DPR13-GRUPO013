import  Layout  from "./../../../Layouts/Layout";
import { useNavigate } from "react-router-dom";
import LoginForm from './../../users/LoginForm'
import { useState } from "react";


const Login = () => {

    const navigate = useNavigate();
    
        function Login(service){

            console.log(service)
    
                fetch('http://localhost:3000/api/v1/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(service)
                })
                .then((resp) => resp.json())
                .then((resp) =>{
                    localStorage.setItem('User', resp.user);
                    localStorage.setItem('AuthToken',resp.token);
                    navigate('/')
                })
                .catch((err) => console.log(err))
        }

    return(
        <Layout>
           
            <LoginForm submit={Login} btnText='Entrar' />
        </Layout>
    )
}

export default Login;