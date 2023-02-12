import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    //almacenar las categorias con el estado, se inicia siempre como un arreglo
    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory)=>{
        //para que no se repitan los nombres, esto ya trae el trim() y el toUpperCase()
        if(categories.includes(newCategory)) return;
        //muestra la nueva categoria pero no sobreescribe en el arreglo para no perder los que ya estaban
        setCategories([newCategory,...categories])

    }
    
    return (
        <>
            <h1>GifExperApp</h1>

            {/* Input */}
            <AddCategory 
            onNewCategory = {(value)=>onAddCategory(value)}
            />

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
