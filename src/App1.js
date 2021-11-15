import React, { Component } from 'react'
import raw from './empfile.txt'

export default class App extends Component {
   constructor()
   {
     super();
      this.state={
         monsters:[],
         txtdata:[]
       };
   }
      componentDidMount()
      {
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=>response.json())
         .then(users=>this.setState({monsters:users}))
         /*.then(function(response){
            return response.text();})
         .then(function (users) {
            console.log(users);})*/
      }
      
      onclick= () =>{
         fetch(raw)
             .then(function(response){
                 return response.text();
             }).then(function (data) {
             console.log(data);
         }).then(users1=>this.setState({txtdata:users1}));
     }

   render() {
      const { monsters } = this.state;
      return (
         <>
         <h1>Data Fetching</h1>
         <button onClick={this.onclick}>Fetch text file data</button>
         <button >Fetch url data</button>
        <ul>
          {monsters.map(user => (
            <li key={user.id}>
              {/*user.id*/} {user.name} 
            </li>
          ))}
        </ul>
        </>
      );
  }
}