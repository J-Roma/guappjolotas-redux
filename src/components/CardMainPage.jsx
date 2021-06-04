import React from 'react';
// import { Link } from 'react-router-dom';
import { MensajeBuscador, IBuscador, H1Buscador, EachMealCard, EachMealImage, EachMealDescriptionContainer, EachMealFlavor, EachMealPrice} from '../styles/Style';


function CardMainPage(props) {
  return (
    <div>
      {props.data.map((eachMeal) => {

        // si la barra del buscador de Modal.js esta vacia me mandara la informacion siguiente desde el useBuscar.js y por ende el mensaje de realizar busqueda
        if (eachMeal.name === "Escriba la comida a buscar") {
          return (
            <MensajeBuscador>
              <IBuscador modal className="fas fa-search"></IBuscador>
              <H1Buscador>Realiza una Busqueda</H1Buscador>
            </MensajeBuscador>
          )
        }
        else {
          // y si viene co algun dato la barra de busqueda proseguir con su programacion normal

          return (
            //  <Link to={`/shop/${eachMeal.id}`} key={eachMeal.id} >
              <EachMealCard key={eachMeal.id}>
                <EachMealImage src={eachMeal.imageUrl} />
                <EachMealDescriptionContainer>
                  <EachMealFlavor>{eachMeal.name}</EachMealFlavor>
                  <EachMealPrice>$ {eachMeal.price} MXN</EachMealPrice>
                </EachMealDescriptionContainer>
              </EachMealCard>
            //  </Link>
          )
        }
      })}
    </div>
  );
}

export default CardMainPage;
