import { useState } from "react"
import { AgregarTarea } from "./src/Components/AgregarTarea"


const Items = ({nombre, visto}) => {
    return (
        <li>{nombre}
        
        {visto ? '✅' : '❌'}</li>
    )
}
//terna {si visto ? signo de interrogacion indica si es verdadero icono verde : si falso icono rojo}
//terna {si visto (&& indica que busca la primera condiciones true)}

export const ListadoApp = () => {
    //funcion de flecha para el boton de agregar registro al arreglo que contiene la lista de items
const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: true}])

    //arreglo.push({ nombre: 'nuevo', visto: true})

}
    //defino el arreglo, la key de este arreglo simple es el nombre
let listadoSecciones = [
{ nombre: "Instalaciones necesarias", visto: true },   
{ nombre: "Uso de Vite", visto: true },
{ nombre: "Componentes", visto: false },
{ nombre: "Variables en JSX", visto: true },
{ nombre: "Props", visto: true },
{ nombre: "Eventos", visto: true },
{ nombre: "useState", visto: true },
{ nombre: "Redux", visto: true },
{ nombre: "custumHooks", visto: true },
{ nombre: "OTROS", visto: false },
]
const [arreglo, setArreglo] = useState(listadoSecciones)
//console.log(arreglo)

const onAgregarTarea = (val) =>  {
    //console.log(val)
    const envio = {
        nombre: val,
        visto: false
    }
    setArreglo([...arreglo, envio])
}



    return (
    <>
    <h1>Listado de temas:</h1>
   <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
    <ol>
     {arreglo.map(item => <Items key={item.nombre} nombre = {item.nombre} visto={item.visto}></Items>)}
    </ol> 
    </>
  )

   // <button onClick={() => addTask()}>Agregar Tarea</button>

  /*
  <Items nombre="Instalaciones necesarias" visto={true}></Items>
    <Items nombre="Uso de Vite" visto={true}></Items>
    <Items nombre="Componentes" visto={false}></Items>
    <Items nombre="Variables en JSX" visto={false}></Items>
    <Items nombre="Props" visto={false}></Items>
    <Items nombre="Eventos" visto={false}></Items>
    <Items nombre="useState" visto={false}></Items>
    <Items nombre="Redux" visto={false}></Items>
    <Items nombre="custumHooks" visto={false}></Items>
    <Items nombre="OTROS" visto={false}></Items>
     */

}