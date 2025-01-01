import axios from "axios"

export default async  function BlogPage({params}:any){
    const postId = (await params).postId; 
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return <div>
        <h1>Blog Page {postId}</h1>
        <p>title - {response.data.title}</p>

    </div>
}