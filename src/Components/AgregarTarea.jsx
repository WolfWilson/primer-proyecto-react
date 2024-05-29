import { useState } from "react"
export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        //console.log('Está escribiendo')
        setInputValue(event.target.value)
    }
    //esta funcion previese que se actualice la página cada vez que se manda un valor del form
    const onSubmit = (event) => {
        event.preventDefault()
        AgregarTarea(inputValue)
       
    }
  return (
    <form onSubmit ={onSubmit}>
     <input 
        type="text"
        placeholder="Ingresá nueva tarea"
        value = {inputValue}
        onChange={onInputChange}
     //el evento manda el cambio a useState que estaba seteada a vacio, al detectar el cambio setea el nuevo valor dentro del target asignado
     //eso es lo que hace setInputValue(event.target.value)
     />
    </form> 
  )

   /*const envio = {
            nombre : inputValue,
            visto : false
        }
        event.preventDefault()
        //console.log(inputValue);  quiero capturar el valor de input y mandarlo al padre para insertarlo en el arreglo
        agregarTarea(tareas => [...tareas, envio])
        //... stread operator*/

}
