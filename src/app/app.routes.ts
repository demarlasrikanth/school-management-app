import { Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { main } from './main/main.routes';

export const routes: Routes = [
      { path: 'login', component: LoginComponent },
       ...main,
       { path: '', redirectTo: 'login', pathMatch: 'full' }, 
        { path: '**', redirectTo: 'login' }, 
   
];
