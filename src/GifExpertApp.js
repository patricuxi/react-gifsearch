import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {


    // const categories = ['Peaky Bleander', 'Juego de tronos', 'The Walking Dead'];  -> Esto es por si nunca va a cambiar
    // const [categories, setCategories] = useState(['Peaky Bleander', 'Juego de tronos', 'The Walking Dead']);

    const [categories, setCategories] = useState(['Memes developers']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, ' Vikingos'] );
    //
    //     //cats es el valor del estado anterior (o sea todas las categorías)
    //     setCategories( cats => [...cats, ' Vikingos'] );
    // }

    return (
        <>
            <h2 className="animate__rubberBand">Search GIFs - Get the best GIF</h2>
            {/*//Le mando la referencia de setcategories*/}
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {/*//El key no puede ser el índice y debe de ser único*/}
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    )
}
