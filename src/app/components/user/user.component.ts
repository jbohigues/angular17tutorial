import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatingSystem } from '../../interfaces/operating-system';
import { OperatingSystemsService } from '../../services/operating-systems.service';

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

  operatingSystemService: OperatingSystemsService = inject(
    OperatingSystemsService
  );
  operatingSystems: OperatingSystem[] =
    this.operatingSystemService.getOperatingSystems();

  onMouseEnter() {
    console.log('No editable!');
  }

  emitToParent() {
    this.greet.emit("Hi! I'm your child");
  }
}
