import { types } from "../types/types";
import {db} from '../firebase/config'

export const  loadProducts = (product) => {
    return {
        type: types.dbProductos,
        payload: {
            product
        }
    };
};

export const load = (datos) => {    
    
    return (dispatch) => {
      db.collection(`app/productos/${datos}`).get()
      .then((snap)=>{
          const productosArr = []

          snap.forEach(hijo=>{
              productosArr.push({
                  ...hijo.data()
              })

          })
          console.log(productosArr);
          dispatch(loadProducts(productosArr))
      })  
    }
}