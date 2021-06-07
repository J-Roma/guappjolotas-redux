import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load } from '../actions/dbProductos'
import BotonComprar from './subCompra/BotonComprar'
import Counter from './subCompra/Counter'
import Sabores from './subCompra/Sabores'
import {Slider} from './subCompra/Slider'



const VerCompra = () => {
    
    const state = useSelector(state => state.db.dbProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        
        if (!state.lengt){
            dispatch(load())
        }

    }, [])

    return (
        <div>
            <Slider/>
            <Counter/>
            <Sabores/>
            <BotonComprar/>
        </div>
    )
}

export default VerCompra
