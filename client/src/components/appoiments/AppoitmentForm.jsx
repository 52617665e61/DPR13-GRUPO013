import styles from './AppoitmentForm.module.css';
import SubmitButton from '../form/SubmitButton';
import { useForm, useController } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import Appoitment from '../pages/appoitment/Appoitment';



function AppoitmentForm({submit, btnText}){

    const {
        register, 
        handleSubmit, 
        formState: {errors}} 
        = useForm({})

         const [services, setServices] = useState([])
    const [appoitment, setAppoitment] =useState([])
        
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
    
        return (
            <>
            <main >
                <form onSubmit={handleSubmit(submit)} className={styles.form_control}>
                    
                    <label htmlFor=''>Nome</label>
                    <input
                        type='string'
                        {...register('client')}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
    
                    <label htmlFor=''>Telefone</label>
                    <input 
                        type='string'
                        {...register('phone')}
                    />
                    {errors.description && <span>{errors.description.message}</span>}
                    <label htmlFor=''>Endereço</label>
                    <input 
                        type='string'
                        {...register('address')}
                    />
                    {errors.description && <span>{errors.description.message}</span>}
    
                    <label htmlFor=''>Serviço</label>
                    <select {...register('service')}>
                        {services.map((service) => (
                            <option value={service._id}>{service.name}</option>
                        ))}
                    </select>
                    {errors.value && <span>{errors.value.message}</span>}
                    <label htmlFor=''>Descreva o problema</label>
                    <input 
                        type='string'
                        {...register('description')}
                    />
                    {errors.description && <span>{errors.description.message}</span>}
    
                    
    
                    <SubmitButton text={btnText}/>
    
                </form>
            </main>
            </>
        )
        
    


    // const [services, setServices] = useState([])
    // const [appoitment, setAppoitment] =useState([])
        
    //         useEffect(() => {
    //             fetch('http://localhost:3000/api/v1/services', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             })
    //             .then(resp => resp.json())
    //             .then((data) => {
    //                 setServices(data)
                    
    //             })
    //             .catch((err) => console.log(err))
    //         },[])

    // const go = (e) => {
    //     submit(appoitment)
    // }

    // function handleChange(e) {
    //     setAppoitment({...appoitment, [e.taget.name]: e.target.value})
    // }

    // function handleService(e) {
    //     setServices({...appoitment, service: {
    //         id: e.target.vakue,
    //         name: e.target.option[e.target.seletedIndex]
    //     }})
    // }
    


    // return(
    //     <>
    //     <form onSubmit={go}>
    //         <input name='client'  type='text' onChange={handleChange}></input>
    //         <input name='phone' type='number' onChange={handleChange}></input>
    //         <input name='address' type='text' onChange={handleChange}></input>
    //         <select  onChange={handleService}>
    //             {services.map((service) => (
    //                 <option value={service._id}>{service.name}</option>
    //             ))}
    //         </select>
    //         <input name='description' type='text' onChange={handleChange}></input>
    //         <SubmitButton submit={submit} text={btnText}/>
    //     </form>
    //     </>
    // )
}

export default AppoitmentForm;