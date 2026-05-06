import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  @Input() isCollapsed: boolean = false;  
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();
  logout() {}
  toggle() {
    this.toggleSidebar.emit(); // Notify parent to toggle
  }
}
