import { useState } from "react";


export const AddCategory = ({onNewCategory}) => { //onNewCategory viene de las props del useState que tenemos en gifExpertApp

    const [inputValue, setinputValue] = useState('');
    //para el onchange y no nos de error
    const onInputChange = ({target})=>{ //EN EL EVENTO TENEMOS TARGET
        setinputValue(target.value); //se podra ver en el input lo que estamos escribiendo
    }

    //para el submit del formulario
    const onSubmit = (evento)=>{
        evento.preventDefault(); //prevenimos que se recargue
    
        //que el usuario no meta caracteres vacios y que sea solo 1, trim para borrar espacio al principio y al final
        if(inputValue.trim().length <= 1) return;

        //solo mandamos el valor del input y para que siempre se muestra en mayuscula
        onNewCategory(inputValue.trim().toUpperCase()); 

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
