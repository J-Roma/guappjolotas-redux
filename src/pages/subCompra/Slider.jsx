import React, { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

//Inicio de los Estilos

// Fin de los Estilos
const Img = styled.img`
    height: 150px;
    width: 150px;
    padding-bottom: 20px;
`
const Guajolota = styled.h1`
    font-size: 28px;
    padding: 0 53px 0 53px;
`

const Price = styled.h1`
    font-size: 28px;
    color: #FA4A0C;
    margin: 0;
    padding: 0;
`
// Inicio del componente
export const Slider = () => {

    const state = useSelector(state => state.db.dbProducts.product)
    

    return (
        <div className="container">
            <div className="row text-center p-2">
                <div className="col-12">
                    <Img src={state[0].url} alt="GV" />
                </div>
                <div className="col-12">
                    <div className="">
                        <Guajolota>{state[0].name}</Guajolota>
                        <Price>{state[0].price} MXN</Price>
                    </div>
                </div>
            </div>

        </div>

    )
}

