import { Post } from "./Post";
import { fetchPosts } from "../api/postsApi";
const posts = fetchPosts();


 export function Postlist(){
 return(
 <div>
{posts.map((postslist) =>(
<Post
key={postslist.id} tite= {postslist.tite} body = {postslist.body}
/>
)
)}
 </div>

 );
}