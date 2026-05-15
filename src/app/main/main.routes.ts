import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { FeeManagementComponent } from '../features/fee-management/fee-management.component';
import { StudentManagementComponent } from '../features/student-management/student-management.component';

export const main: Routes = [
  {
    path: '',
    component: MainComponent /* canActivate: [authGuard], */,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'fee-management', component: FeeManagementComponent },
      { path: 'students', component: StudentManagementComponent },
    ],
  },
];
