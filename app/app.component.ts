import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TodoListComponent} from './todolist.component'
import {TodoService} from './todo.service';
import {Todo} from './todo';

@Component({
    selector: 'my-app',
    directives: [TodoListComponent],
    template: `
        <h1>Todo App</h1>
        <todo-list></todo-list>
        `,
    providers: [TodoService]
})
export class AppComponent {
    constructor() { }
}