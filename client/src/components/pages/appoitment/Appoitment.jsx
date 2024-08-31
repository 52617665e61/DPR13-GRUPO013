import Layout from "../../../Layouts/Layout";
import AppoitmentForm from "../../appoiments/AppoitmentForm";
import { useNavigate } from "react-router-dom";

function Appoitment(){

    const navigate = useNavigate();

    function CreateAppoitment(appoitment){

            fetch('http://localhost:3000/api/v1/appoitments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appoitment)
            })
            .then((resp) => resp.json())
            .then(() =>{
            navigate(0),
            {message:'Agendamento feito'}
            })
            .catch((err) => console.log(err))
    }


    return(
        <>
        <div>
            <Layout>
            <p>Para agendar um serviço ou visita conosco basta preeencher o formulário abaixo</p>
            <AppoitmentForm submit={CreateAppoitment} btnText='Agendar'/>
            </Layout>
        </div>
        </>
    )
}

export default Appoitment;