import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    //el state es toda la informacion que está dentro del useState, en este caso el data y loading
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])

    return state; // { data:[], loading: true };

}
