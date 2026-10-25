export function  postsReducer(state,action){
switch(action.type){
 case 'FETCH_START':
    return {...state, status:'Loading...' };
 case 'FETCH_SUCCESS':
    return{...state, status:'Success!', data: action.payload};
 case 'FETCH_ERROR':
    return{...state,status:'Error!', error: action.payload};
    default:
    return state;      


 }

}