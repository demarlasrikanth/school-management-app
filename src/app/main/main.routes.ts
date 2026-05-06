import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { DashboardComponent } from "../features/dashboard/dashboard.component";

export const main: Routes = [
  {
    path: '',
    component: MainComponent, /* canActivate: [authGuard], */
    children: [
      { path: '', component: DashboardComponent }
    ],
  },
];