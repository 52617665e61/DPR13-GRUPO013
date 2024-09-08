import styles from './FormRegistration.module.css'
import SubmitButton from '../form/SubmitButton';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const createUserSchema = z.object ({
    email: z.string(),
    password: z.string().min(6, 'min 6')

})


function UsersForm({submit, btnText}){

    const {
        register, 
        handleSubmit, 
        formState: {errors}} 
        = useForm({
        values:{
            email: (''),
            password: ('')
        },
        resolver: zodResolver(createUserSchema)
    })
    
    
    
    
    return (
        <>
        <main >
            <form onSubmit={handleSubmit(submit)} className={styles.form_control}>
                
                
                <label htmlFor=''>Email</label>
                <input 
                    type='string'
                    {...register('email')}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor=''>senha</label>
                <input
                    type='string'
                    {...register('password')}
                />
                {errors.passwordHash && <span>{errors.passwordHash.message}</span>}


                

                <SubmitButton text={btnText}/>

            </form>
        </main>
        </>
    )
}


export default UsersForm;