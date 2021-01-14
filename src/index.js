import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes.js';
import './styles.css';

 export const todoList = new TodoList();

 todoList.todos.forEach( crearTodoHtml );

//const tarea = new Todo('Aprender JavaScript!!');
//todoList.nuevoTodo(tarea);

//tarea.completado = true;

//console.log(todoList.todos);

//crearTodoHtml(tarea);


/*
localStorage.setItem('mi-key','ABC123');
sessionStorage.setItem('mi-key','ABC123');

setTimeout(() => {
    localStorage.removeItem('mi-key');
},1500);
*/