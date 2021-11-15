import React from 'react';
import {Todo} from './Todo';

export const Todos = (props) => {
   let e_list="";
   if(props.todol=="")
   {
      e_list="Empty list";               
   }
   return (
      
      <div className="container">
         
         {/* this method used to call each element in the array */}
         {
            e_list
         }
         {props.todol.map((todo)=>{
            return (
               <>
               <Todo todo={todo} onDelete={props.onDelete} onEdit={props.onEdit} /><hr/>
               </>
            ) 
         })}
         
      </div>
      
   )
}
