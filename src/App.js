import {Todos} from './MyComponent/Todos';
import React, { useState } from 'react';
import Addtodo from './MyComponent/addtodo';

function App() {
  
  //create default todo List
  const [todo, setTodo] = useState([
    /*{
      id:1,
      title:"go to the market"
    },
    {
      id:2,
      title:"go to the school"
    },
    {
      id:3,
      title:"go to the office"
    }*/
  ]);

  
  //delete todo item
  const onDelete=(item)=>
  {
    console.log("delete",item);
    setTodo(todo.filter((e)=>{
      return e!==item;
    }))
  };

  //edit Todo item
  const onEdit=(id,item)=>
  {
    let up_item=prompt("enter updated value ",item);
    const editedTaskList = todo.map(todo => {
      // if this todo has the same ID as the edited task
        if (id === todo.id) {
          
          return {...todo, title: up_item}
        }
        return todo;
      });
      setTodo(editedTaskList);
  }

  //add todo item in the list
  const addTodo=(title)=>
  {
    let id;
    //console.log(title);
    if(todo.length==0){
      id=0;
    }
    else{
      id=todo[todo.length-1].id+1;
    }
    
    const updatetodo={
      id:id,
      title:title
    }
    setTodo([...todo,updatetodo])
    console.log(updatetodo);
  }

  return (
      <>
        <div className="display">
          <Addtodo addTodo={addTodo}/>
          <div className="todocolor">
          <Todos todol={todo} onDelete={onDelete} onEdit={onEdit}/>
          </div>
        </div>
      </>
  );
}

export default App;