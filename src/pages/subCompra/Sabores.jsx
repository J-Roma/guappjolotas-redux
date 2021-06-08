import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setProduct } from '../../actions/addPedido'

const Center = styled.div`
    margin: 0 auto;
`

const Img = styled.img`
    height: 74px;
    width: 69px;
    opacity: .6;
    &hover {
        opacity: 1;
    }
`

const Sabores = () => {

    const dispatch = useDispatch()
    const handleProduct = (e) => {

        dispatch(setProduct(e.target.id))
    }

    return (
        <Center className="container p-4">
            <h3><strong>Sabor</strong></h3>
            <div class="d-flex flex-row flex-wrap bd-highlight mb-3 justify-content-start gap-2 ms-1">
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id="Guajolota Verde" src="https://i.imgur.com/vwb6NV8.png" alt="" />
                </div>
                <div class="p-3  bd-highlight text-center">
                    <Img onClick={handleProduct} id="Guajolota de Mole" src="https://i.imgur.com/Q9L1kek.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id="Guajolota de Guayaba" src="https://i.imgur.com/ZfozpXu.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id="Guajalote de Piña" src="https://i.imgur.com/ILG91RE.png" alt="" />
                </div>
                <div class="p-3 bd-highlight text-center">
                    <Img onClick={handleProduct} id="Guajalote de Pasas" src="https://i.imgur.com/1A5007d.png" alt="" />
                </div>
            </div>  
        </Center>
    )
}

export default Sabores
