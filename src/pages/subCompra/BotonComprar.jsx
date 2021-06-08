import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Button = styled.button`
    position: fixed;
    text-align: center;
    bottom: 0;
    background: #FA4A0C;
    color:  white;
    font-size: 1em;
    margin: 1em;
    padding: 15px 5px;
    border: none;
    border-radius: 40px;
    width: 312px;
    height: 69px;
    z-index: 200;
    left: 4%;

`

const BotonComprar = () => {

    const compra = useSelector(state => state.buy)
    const {combo} = compra
    let quantityCombo = 0
    let priceCombo = 0
    if(combo.price){
        quantityCombo = combo.quantity
        priceCombo = combo.price
    }

    return (
        <div>
            <Button>Agregar {compra.amount+ quantityCombo} al carrito $ {compra.price + priceCombo}  </Button>
        </div>
    )
}

export default BotonComprar
