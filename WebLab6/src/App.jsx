import './App.css'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { postsReducer } from './reducer/postsReducer';
function App(){
const initalState = {
    posts: [],
    loading: false,
    error: null
 };
 
const [state,dispatch] = useReducer(postsReducer,initalState)
useEffect(() =>{
const loadPosts = async () => {
  dispatch({type:'FETCH_START'});
try{
  const data = await fetchPosts();
  dispatch({type:'FETCH_SUCCESS',payload: data});
}  catch(err){
  dispatch({type:'FETCH_ERROR', payload: err.message});
}

};
loadPosts(); }, [])
 return(
  <div className='loadposts'>
  {state.loading && <p>Loading</p>}
  {state.error && <p id='error'> Error: {state.error}</p>}
  {!state.loading && !state.error && state.posts.lenght === 0 && <p>No posts found.</p>}
  </div>
 )


}