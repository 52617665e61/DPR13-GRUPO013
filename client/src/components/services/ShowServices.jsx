import { Link } from 'react-router-dom'
import styles from './ShowServices.module.css'
import { useNavigate } from 'react-router-dom'



function ShowServices({id, name, description, value, handleRemove}) {
    
    const navigate = useNavigate()

    const remove =(e) => {
        handleRemove(id)
        navigate(0)
        }


    return(
        <>
        <div className={styles.show_service}>
            <h1>{name}</h1>
            <p>{id}</p>
            <p>{description}</p>
            <p>Valor : {value}</p>
            <div className={styles.show_service_actions}>
                <Link to={`/serviço/${id}`}>Editar</Link>
                <button onClick={remove}>Excluir</button>
            </div>
        </div>
        </>
    
    )
}

export default ShowServices;