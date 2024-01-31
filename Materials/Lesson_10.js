import axios from "axios";

let getPost = async function(){
    let result = await axios.get("https://jsonplaceholder.typicode.com/comments/1")
    console.log(result.data)
}

getPost();