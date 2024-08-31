import { useState, useEffect } from "react";
import Layout from "../../../Layouts/Layout";
import  ShowServices  from "../../services/ShowServices";
import styles from './MyService.module.css'
import { Link } from "react-router-dom";


 function MyServices() {
    
     const [services, setServices] = useState([])
        
            useEffect(() => {
                fetch('http://localhost:3000/api/v1/services', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(resp => resp.json())
                .then((data) => {
                    setServices(data)
                    
                })
                .catch((err) => console.log(err))
            },[])
        
    function DeleteService(id) {     
            
       
            fetch(`http://localhost:3000/api/v1/services/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((resp) => resp.json())
            .then((data) => {
                setServices(services.filter((service) => service.id != id))
                
            })
            .catch((err) => console.log(err))
        }
   
    return (
        <>
        <Layout>
            <div className={styles.my_service}>
                <Link to ={'/meusServiços/AdicionarServiço'}>Adicionar Serviço</Link>
            </div>
            <div>
                {services.map((service) => (
                    <ShowServices 
                    key={service._id} 
                    id={service._id}
                    name={service.name} 
                    description={service.description} 
                    value={service.value}
                    handleRemove={DeleteService}
                    />
                ))}
           </div> 
        </Layout>
        </>
    )
}

export default MyServices;