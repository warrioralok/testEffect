import React, { useEffect , useState }  from "react";
import axios from "axios";


const UseEffect = () =>{
    const [emptyEmail, fetchedEmail ] = useState(["dsa"]); 
    const [loading, setLoading] = useState(true);
    let rows = []
    useEffect( () =>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) =>{

           for(let i = 0; i < response.data.length; i++){
               rows.push(<li> {response.data[i].email}  </li>)
               fetchedEmail(rows)
               setLoading(false);
           }

        })
    },[])
    return(
        <ul>
           { loading ? 'Loading...' : emptyEmail }
        </ul>
    )
}

export default UseEffect