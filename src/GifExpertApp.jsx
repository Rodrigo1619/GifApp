import { useState } from "react"

export const GifExpertApp = () => {
    //almacenar las categorias con el estado, se inicia siempre como un arreglo
    const [categories, setCategories] = useState(['One Punch', 'erased']);
    const onAddCategory = ()=>{
        setCategories(['mainkra',...categories])
    }
    
    return (
        <>
            <h1>GifExperApp</h1>

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
