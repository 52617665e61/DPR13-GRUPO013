import styles from './FormRegistration.module.css'
import SubmitButton from '../form/SubmitButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const createUserSchema = z.object ({
    name: z.string().min(3, 'min 3 caracteres'),
    email: z.string(),
    passwordHash: z.string().min(6, 'min 6')

})


function UsersForm({submit, btnText, serviceData}){

    const {
        register, 
        handleSubmit, 
        formState: {errors}} 
        = useForm({
        values:{
            name: (serviceData ? serviceData.name : ''),
            email: (serviceData ? serviceData.email : ''),
            passwordHash: (serviceData ? serviceData.passwordHash: '')
        },
        resolver: zodResolver(createUserSchema)
    })
    
    
    
    
    return (
        <>
        <main >
            <form onSubmit={handleSubmit(submit)} className={styles.form_control}>
                
                <label htmlFor=''>Nome Completo</label>
                <input
                    type='string'
                    {...register('name')}
                />
                {errors.name && <span>{errors.name.message}</span>}

                <label htmlFor=''>senha</label>
                <input
                    type='string'
                    {...register('passwordHash')}
                />
                {errors.passwordHash && <span>{errors.passwordHash.message}</span>}

                <label htmlFor=''>Email</label>
                <input 
                    type='string'
                    {...register('email')}
                />
                {errors.email && <span>{errors.email.message}</span>}

                

                <SubmitButton text={btnText}/>

            </form>
        </main>
        </>
    )
}


export default UsersForm;