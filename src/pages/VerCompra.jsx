import React from 'react'
import Counter from './subCompra/Counter'
import Sabores from './subCompra/Sabores'
import {Slider} from './subCompra/Slider'

const VerCompra = () => {
    return (
        <div>
            <Slider/>
            <Counter/>
            <Sabores/>
        </div>
    )
}

export default VerCompra
