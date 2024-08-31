import styles from './Input.module.css'

function Input({type, text, id, name, category, placeholder, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor= {name}> {text} </label>
            <input 
            type={type}
            name={name}
            id={id}
            category ={category}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}

export default Input;