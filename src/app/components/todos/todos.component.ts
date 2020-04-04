import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todoArray = []
  todo;

   addTodo(value){
     if(value!==""){
     this.todoArray.push(value)
     }else{
       alert('Field required **')
     }
   }

   deleteItem(todo){
  	for(let i=0 ;i<=this.todoArray.length ;i++){
  		if(todo===this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }
todoSubmit(value){
  if(value!==""){
 this.todoArray.push(value.todo)
 }else{
   alert('Field required **')
 }
 
}
}
