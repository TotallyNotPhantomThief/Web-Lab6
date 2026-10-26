import './App.css'
import { useEffect, useState } from 'react'
import { useReducer } from 'react'
import { postsReducer } from './reducer/postsReducer';
import FilterForm from './components/FilterForm'
function App(){
const initalState = {
    posts: [],
    loading: false,
    error: null
 };
 
const [state,dispatch] = useReducer(postsReducer,initalState)

const [searchTerm, setSearchTerm] = useState('');


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
loadPosts(); }, []);
const filtredPosts = state.posts.filter(post =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase)
);


 return(

  <div className='loadposts'>

  <FilterForm searchTerm={searchTerm} setSearchTerm= {setSearchTerm}/>


  {state.loading && <p>Loading</p>}
  
  
  {state.error && <p id='error'> Error: {state.error}</p>}
  
  
  {!state.loading && !state.error && state.posts.lenght === 0 && <p>No posts found.</p>}
  <ul>
   {filtredPosts.map(post => ( 
    <li key={post.id}>{post.title}</li>
   ))}
  </ul>
  </div>





 );


}