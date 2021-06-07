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
        db.collection('app/productos/guajalotas')
        .onSnapshot( snap => {
          const productos = [];
           snap.forEach(snapHijo => {
            productos.push({
              ...snapHijo.data()
            })
            console.log(productos);

          })
          dispatch(loadProducts(productos))
        });   
    }
}
