import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { DevsComponent } from './components/devs/devs.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "users", component: UsersComponent},
  {path: "jobs", component: JobsComponent},
  {path: "devs", component: DevsComponent},
  {path: "**", redirectTo: ""},
];
