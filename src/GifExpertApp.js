import { useState } from 'react';
import {AddCategory } from './components/AddCategory.js'
import { GifGrid } from './components/GifGrid.js';

const GifExpertApp = () => {
    // const [categorias, setCategorias] = useState([ 'Categoria 1', 'categoria 2', 'categoria 3']);
    const [categorias, setCategorias] = useState([ 'no category']);

    // const handleAdd = () => {
    //     // setCategorias( [...categorias, 'categoria ' + (categorias.length +1) ]);
    //     setCategorias( cats => [...cats, 'categoria ' + (cats.length +1)]);
    //     // console.log(categorias.length );
    // };
    
    
    return( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategorias={setCategorias} />
            <hr />
            
            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categorias.map( cat => {
                        // return <li key={cat}> {cat} </li>
                        return (<GifGrid key={cat} category={cat}
                        />)
                    })
                    // categorias.map( cat => {
                    //     return <GifGrid 
                    //                 key= { cat }
                    //                 category={ cat } />
                    // })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;