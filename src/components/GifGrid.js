// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    // console.log(data, loading);

    // const [ images, setImages ] = useState([]);

    // useEffect( () => {
    //     getGifs( category)  
    //     .then( imgs => setImages(imgs))
    // }, [ category ]);

   
    // getGifs();

    return ( 
    <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        { loading && <p className="animate__animated animate__flash">'Cargando...' </p> }

        <div className="card-grid">
          
                {
                    images.map( g => {
                        // return (<li key={g.id}><a href={g.url}> {g.title} </a></li> )
                        return ( <GifGridItem 
                            key={g.id} 
                            {...g}
                        />)
                    })
        
                }
        </div>
        </>
    )
}
