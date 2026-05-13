import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



const API_RESPONSE = {
  role: 'Super Admin',
  role_id: 1,
  sections: [
    {
      id: 1, section: 'Overview', order: 1, icon: 'home',
      items: [
        { id: 7, name: 'Dashboard', icon: 'dashboard', route: '/dashboard', order: 1, can_view: true },
        { id: 8, name: 'Analytics', icon: 'bar_chart', route: '/analytics', order: 2, can_view: true },
      ]
    },
    {
      id: 2, section: 'Management', order: 2, icon: 'settings',
      items: [
        { id: 9, name: 'Schools', icon: 'business', route: '/schools', order: 1, can_view: true },
        { id: 10, name: 'Branches', icon: 'device_hub', route: '/branches', order: 2, can_view: true },
        { id: 11, name: 'Classes', icon: 'grid_view', route: '/classes', order: 3, can_view: true },
        { id: 12, name: 'Academic Years', icon: 'calendar_today', route: '/academic-years', order: 4, can_view: true },
      ]
    },
    {
      id: 3, section: 'People', order: 3, icon: 'group',
      items: [
        { id: 13, name: 'Students', icon: 'group', route: '/students', order: 1, can_view: true },
        { id: 14, name: 'Teachers', icon: 'school', route: '/teachers', order: 2, can_view: true },
        { id: 15, name: 'Caretakers', icon: 'favorite', route: '/caretakers', order: 3, can_view: true },
        { id: 16, name: 'Users', icon: 'person', route: '/users', order: 4, can_view: true },
        { id: 17, name: 'Roles', icon: 'shield', route: '/roles', order: 5, can_view: true },
      ]
    },
    {
      id: 4, section: 'Academics', order: 4, icon: 'menu_book',
      items: [
        { id: 18, name: 'Attendance', icon: 'assignment', route: '/attendance', order: 1, can_view: true },
        { id: 19, name: 'Exams', icon: 'description', route: '/exams', order: 2, can_view: true },
        { id: 20, name: 'Results', icon: 'emoji_events', route: '/results', order: 3, can_view: true },
        { id: 21, name: 'Timetable', icon: 'schedule', route: '/timetable', order: 4, can_view: true },
        { id: 22, name: 'Library', icon: 'menu_book', route: '/library', order: 5, can_view: true },
      ]
    },
    {
      id: 5, section: 'Finance', order: 5, icon: 'account_balance_wallet',
      items: [
        { id: 23, name: 'Fees', icon: 'payments', route: '/fees', order: 1, can_view: true },
        { id: 24, name: 'Payroll', icon: 'account_balance_wallet', route: '/payroll', order: 2, can_view: true },
      ]
    },
    {
      id: 6, section: 'System', order: 6, icon: 'tune',
      items: [
        { id: 25, name: 'Settings', icon: 'settings', route: '/settings', order: 1, can_view: true },
        { id: 26, name: 'Reports', icon: 'download', route: '/reports', order: 2, can_view: true },
      ]
    },
  ]
};

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, MatIconModule, RouterOutlet],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnInit {
  @Input() isCollapsed: boolean = false;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  sections: any[] = [];
  roleName: string = '';

  ngOnInit() {
    this.roleName = API_RESPONSE.role;
    this.sections = API_RESPONSE.sections
  }

  toggleSection(section: any) {
    section.isOpen = !section.isOpen;
  }

  toggle() {
    this.toggleSidebar.emit();
  }

  logout() {}
}