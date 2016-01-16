import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {OnInit} from 'angular2/core';
import {TodoService} from './todo.service';
import {TodoItemComponent} from './todoitem.component'
import {Todo} from './todo';

@Component({
    selector: 'todo-list',
    template: `
        <ul>
            <todo-item *ngFor="#todo of todos" [todo]="todo"></todo-item>
        </ul>
    `,
    directives: [TodoItemComponent]
})

export class TodoListComponent implements OnInit {
    public todos: Todo[];
    constructor(private _todoService: TodoService) {
    }
    
    getTodos() {
        this._todoService.getTodos().then(todos => this.todos = todos);
    }

    ngOnInit() {
        this.getTodos();
    }

}
