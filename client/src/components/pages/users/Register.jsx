import UsersForm from "../../users/FormRegistration";
import  Layout  from "./../../../Layouts/Layout"
import { useNavigate } from "react-router-dom";


const Register = () => {


    const navigate = useNavigate();

    function CreateUser(service){

            fetch('http://localhost:3000/api/v1/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(service)
            })
            .then((resp) => resp.json())
            .then(() =>{
            console.log(service)
            {message:'Serviço Adicionado'}
            })
            .catch((err) => console.log(err))
    }


    return(
        <Layout>
            <UsersForm submit={CreateUser} btnText='Cadastrar'/>

        </Layout>
    )
}

export default Register;