//REFERENCIAS EN EL HTML
import { todoList} from '../index.js';
import { Todo } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros= document.querySelector('.filters');
const nachorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
};

//EVENTOS

txtInput.addEventListener('keyup',(event) => {
    if(event.keyCode === 13 && txtInput.value.length > 0){
        //console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    };
});

divTodoList.addEventListener('click',() => {
    //console.log('click');
    //console.log(event.target.localName);
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    //console.log(todoElemento);
    //console.log(todoId);
    if(nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    };
    //console.log(todoList);
    todoElemento.classList.toggle('completed');

});

btnBorrar.addEventListener('click',() => {
    todoList.eliminarCompletados();
    for(let i = divTodoList.children.length-1;i>=0;i--){
        const elemento = divTodoList.children[i];
        //console.log(elemento);
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        };
    };
});

ulFiltros.addEventListener('click',(event) => {
    //console.log(event.target.text);
    const filtro = event.target.text;
    if(!filtro){
        return;
    };

    nachorFiltros.forEach(elem => elemento.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        //console.log(elemento);
        elemento.classList.remove('hidden');
        const completados = elemento.classList.contains('completed');
        switch(filtro){
            case 'Pendiente':
                if(completados){
                    elemento.classList.add('hidden');
                };
                break;

            case 'Completados':
                if(!completados){
                    elemento.classList.add('hidden');
                };
                break;
        };
    };
});