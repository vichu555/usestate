import react, { useState } from "react";
function StateFunctional(){
    const [user,setUser]=useState("");
    const handleSubmit=(e)=>{
e.preventDefault();
setUser('')

    }
    return(
        <>
        <h3>useState example</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}></input>
        </form>
        <p>username : {user}</p>
        </>
        
    )
};

export default StateFunctional;