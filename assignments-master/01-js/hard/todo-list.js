/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  #todoList;

  Todo() {
    this.todoList=new Array()
  }
  
  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    this.todoList.spice(indexOfTodo,1);
  }

  update(index, updatedTodo) {
    let newTodo=[];
    
    for(let i=this.todoList.length-1 ; i>index ; --i) {
      newTodo.push(this.todoList[i]);
      this.#todoList.pop();
    }
    
    this.todoList.push(updatedTodo);
    
    for(let i=newTodo.length ; i>=0 ; --i) 
      this.todoList.push(newTodo[i]);
    
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList=[];
  }
}

module.exports = Todo;
