import styles from './ServicesForm.module.css';
import SubmitButton from '../form/SubmitButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const createServiceSchema = z.object ({
    name: z.string().min(4, 'Serviço sem nome(min 4 carcteres)'),
    description: z.string().min(10, 'Coloque uma descrição de no mínimo 10 caracteres'),
    value: z.string().min(1, 'Adicione um valor')
})


function ServicesForm({submit, btnText, serviceData}){

    const {
        register, 
        handleSubmit, 
        formState: {errors}} 
        = useForm({
        values:{
            name: (serviceData ? serviceData.name : ''),
            description: (serviceData ? serviceData.description : ''),
            value: (serviceData ? serviceData.value : '')
        },
        resolver: zodResolver(createServiceSchema)
    })
    
    
    
    
    return (
        <>
        <main >
            <form onSubmit={handleSubmit(submit)} className={styles.form_control}>
                
                <label htmlFor=''>Nome do Serviço</label>
                <input
                    type='string'
                    {...register('name')}
                />
                {errors.name && <span>{errors.name.message}</span>}

                <label htmlFor=''>Descrição</label>
                <input 
                    type='string'
                    {...register('description')}
                />
                {errors.description && <span>{errors.description.message}</span>}

                <label htmlFor=''>Valor</label>
                <input 
                    type='string'
                    {...register('value')}
                />
                {errors.value && <span>{errors.value.message}</span>}

                

                <SubmitButton text={btnText}/>

            </form>
        </main>
        </>
    )
    

    
}

export default ServicesForm;