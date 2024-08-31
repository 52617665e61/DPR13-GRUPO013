import Layout from "../../../Layouts/Layout";
import ServicesForm from '../../services/ServicesForm';
import styles from './AddService.module.css';
import { useNavigate } from 'react-router-dom';



function AddService(){

    const navigate = useNavigate();

    function CreateService(service){

            fetch('http://localhost:3000/api/v1/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(service)
            })
            .then((resp) => resp.json())
            .then(() =>{
            navigate(0),
            {message:'Serviço Adicionado'}
            })
            .catch((err) => console.log(err))
    }
    

    return(
        <Layout>
        <div className={styles.addService}> 
            <h1>Adicionar um novo serviço</h1>
            <p>Preencha o formulário abaixo para estar adionando um novo serviço para sua gama de atividades.</p>
            <ServicesForm  submit={CreateService} btnText='Adicionar Serviço'/>
        </div>
        </Layout>
    )
}

export default AddService;