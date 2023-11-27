import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() ocuppation: string = '';
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  nameUser: string = 'Juan';

  onMouseEnter() {
    console.log('No editable!');
  }

  emitToParent() {
    this.greet.emit("Hi! I'm your child");
  }
}
