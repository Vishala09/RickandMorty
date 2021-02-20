import axios from "axios";
import { act } from "react-dom/test-utils";
let initialState=[];
let dummy=[{'created': "2017-11-04T18:48:46.250Z",
'id': 1,
'image': "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
'name': "Rick Sanchez",
'species': "Human",
'status': "Alive"}]
const imagesReducer = (state=initialState,action) => {
    switch(action.type)
    {
        case 'GET_IMAGES':
            {
                
                state=[...state,...action.images]
                console.log(action,state)
                return [...state]
            }
        case 'REFRESH_IMAGES':
            {
                    if(action.name!=""){
                        
                        state = action.payload.images.filter(el =>  el.name.toLowerCase().includes(action.payload.name.toLowerCase()) )
                        console.log('filter',state)
                        return [...state]
                    }
            }
        
        default:
             return state;
    }
}

export default imagesReducer;