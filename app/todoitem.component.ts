import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Todo} from './todo';

@Component({
    selector: 'todo-item',
    template: `
        <li class="todo-item">
            {{todo.content}}
        </li>
    `
})

export class TodoItemComponent {
    @Input('todo') public todo: Todo;
}