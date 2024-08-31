import { useNavigate } from 'react-router-dom'
import styles from './ShowAppoitments.module.css'



function ShowServices({id, name, phone, address, service, description, handleRemove}) {
    
    const navigate = useNavigate()

    const remove =(e) => {
        handleRemove(id)
        navigate(0)
        }


    return(
        <>
        <div className={styles.show_appoitments}>
            <h1>{name}</h1>
            <p>{id}</p>
            <p>{service}</p>
            <p>{description}</p>
            <p>Contato : {phone}</p>
            <p>Endereço: {address}</p>
            <div className={styles.show_appoitments_actions}> 
                <button onClick={remove}>Excluir</button>
            </div>
        </div>
        </>
    
    )
}

export default ShowServices;