import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../../../Layouts/Layout";
import ServicesForm from "../../services/ServicesForm";

function Service(){

    const { id } = useParams()
    const [service, setService] = useState([])
    const [showServiceForm, setShowServiceForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/services/${id}`, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) => {
            setService(data)
        })
        .catch((err) => console.log(err))
    },[])

    function editService(service){
        console.log(service)
        fetch(`http://localhost:3000/api/v1/services/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setService(data)
            setShowServiceForm(false)
        })
        .catch((err) => console.log(err))

    }

    function toggleServiceForm()  {
        
        setShowServiceForm(!showServiceForm)
        console.log(service)
    }


    return(
        <>
        <Layout>
            <h1>Serviço:{service.name}</h1>
            <button onClick={toggleServiceForm}>
                {!showServiceForm ? 'Editar Serviço' : 'Fechar'}
            </button>
            {!showServiceForm ? (
                <div>
                    <p>Serviço: {service.name}</p>
                    <p>Descrição: {service.description}</p>
                    <p>Valor: {service.value}</p>
                </div>
            ) : (
                <p>
                    <ServicesForm submit={editService} btnText='Concluir Edição' serviceData={service} />
                </p>
            )}

        </Layout>

        </>
    )
}

export default Service;