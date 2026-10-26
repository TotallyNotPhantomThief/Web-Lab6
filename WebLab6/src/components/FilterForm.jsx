export default function filterPosts(searchTerm, setSearchTearm){
    return(
    <div>
    <input
     type="text"
     placeholder="Filter by Title"
     value={searchTerm}
     onChange={(e) => setSearchTearm(e.target.value)}        
    />
    </div>
    )

}
