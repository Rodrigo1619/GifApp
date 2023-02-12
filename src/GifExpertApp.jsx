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
