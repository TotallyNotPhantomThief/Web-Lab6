   export async function fetchPosts() {    
 const fetchIt=  await fetch('https://jsonplaceholder.typicode.com/posts');
 const parsedJson =  await fetchIt.json();
 return parsedJson;
}