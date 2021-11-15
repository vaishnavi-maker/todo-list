import React from 'react'

export const Todo = ({todo,onDelete,onEdit}) => {
   return (
      <div className=" py-2">
         <h4>{/*todo.id*/}{todo.title}</h4>
         <button className="btn btn-sm delete " onClick={()=>onDelete(todo)}>delete</button>
         <button className="btn btn-sm edit" onClick={()=>onEdit(todo.id,todo.title)}>Edit</button>
      </div>
   )
}
