import React from 'react'
import { useState } from 'react';

export default function Addtodo(props) {
   const [title, settitle] = useState("");
   const submit=(e)=>{
     e.preventDefault();
     if(!title){
        alert("title can not be blank")
     }
     else
     {
         props.addTodo(title);
         settitle("");
     }
     
   }
   return (
      <>
      <br></br>
      <h1 className="text-center">Todo List</h1>
      <form onSubmit={submit} className="container my-3 addtodo">
         
         <label>
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}  id="title" 
                 />
         </label>
         <button type="submit">Add Todo</button>
      </form>
      </>
   )
}
