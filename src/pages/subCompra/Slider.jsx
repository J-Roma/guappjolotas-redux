import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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

    return (
        <div className="container">
            <div className="row text-center p-2">
                <div className="col-12">
                    <Img src="https://i.imgur.com/o1aaJ1d.png" alt="GV" />
                </div>
                <div className="col-12">
                    <div className="">
                        <Guajolota>Guajolota de Tamal Verde</Guajolota>
                        <Price>25 MXN</Price>
                    </div>
                </div>
            </div>

        </div>

    )
}

