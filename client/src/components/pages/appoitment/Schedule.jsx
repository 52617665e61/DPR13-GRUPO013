import { useState, useEffect } from "react";
import Layout from "../../../Layouts/Layout";
import  ShowAppoitments from './../../appoiments/ShowAppoitments';



 function MySchedule() {
    
     const [services, setServices] = useState([])
        
            useEffect(() => {
                fetch('http://localhost:3000/api/v1/appoitments', {
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
            
       
            fetch(`http://localhost:3000/api/v1/appoitments/${id}`, {
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
            <div>
                {services.map((service) => (
                    <ShowAppoitments 
                    key={service._id} 
                    id={service._id}
                    name={service.client} 
                    phone={service.phone}
                    address={service.address}
                    service={service.service}
                    description={service.description} 
                    handleRemove={DeleteService}
                    />
                ))}
           </div> 
        </Layout>
        </>
    )
}

export default MySchedule;