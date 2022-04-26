import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList   = new TodoList();


// const tarea     = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo ( tarea );



// console.log(todoList);

// crearTodoHtml( tarea );




// // localStorage.setItem('mi-key', 'ABC12333333');
// // sessionStorage.setItem('mi-key', 'ABC12333333');

// // setTimeout ( () => {

// //     localStorage.removeItem('mi-key');

// // }, 1500);

todoList.todos.forEach(todo => crearTodoHtml ( todo));

const newTodo = new Todo ( 'Aprender JavaScript');
// todoList.nuevoTodo ( newTodo );


newTodo.imprimirClase();


todoList.todos[0].imprimirClase();

// console.log ('todos', todoList.todos);