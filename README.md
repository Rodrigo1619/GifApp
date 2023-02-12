# Version inicial
Este codigo se deja con fines de saber las 2 formas de hacer lo mismo 
```
AddCategory.jsx

import { useState } from "react";


export const AddCategory = ({setCategories}) => { //setCategories viene de las props del useState que tenemos en gifExpertApp

    const [inputValue, setinputValue] = useState('');
    //para el onchange
    const onInputChange = ({target})=>{ //EN EL EVENTO TENEMOS TARGET
        //console.log(target.value);
        setinputValue(target.value); //se podra ver en el input lo que estamos escribiendo
    }

    //para el submit del formulario
    const onSubmit = (evento)=>{
        evento.preventDefault(); //prevenimos que se recargue
        //console.log(inputValue); // y mostramos en consola el valor del input

        //que el usuario no meta caracteres vacios y que sea solo 1, trim para borrar espacio al principio y al final
        if(inputValue.trim().length <= 1) return;

        //mandamos a llamar setCategories y hacemos que no se sobre escriba el arreglo mandando a llamar las categories en su estado
        //y con el ...categories lo que esta en ese arreglo
        setCategories(categories => [inputValue, ...categories]);

        //limpiamos nuestra barra de busqueda
        setinputValue('');
    }

    return(
        <form onSubmit={onSubmit}> {/* (evento) => onSubmit(evento) //asi estaba antes*/}
            <input 
            type="text" 
            placeholder="agregar categoria"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>

    )
};
```

```
GifExpertApp.jsx

import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    //almacenar las categorias con el estado, se inicia siempre como un arreglo
    const [categories, setCategories] = useState(['One Punch', 'erased']);
    const onAddCategory = ()=>{
        setCategories(['mainkra',...categories])
    }
    
    return (
        <>
            <h1>GifExperApp</h1>

            {/* Input */}
            <AddCategory setCategories = {setCategories} />

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>agregar</button>
            <ol>
                {
                    //devolvemos una lista ordenada para nuestra categoria
                    categories.map(category=>{
                        return <li key={category} >{category} </li>
                    })
                }
            </ol>
        </>
    )
}
```


