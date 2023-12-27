import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { DevsComponent } from './components/devs/devs.component';
import { ProductsComponent } from './components/products/products.component';
import { LocationsComponent } from './components/locations/locations.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "users", component: UsersComponent},
  {path: "jobs", component: JobsComponent},
  {path: "devs", component: DevsComponent},
  {path: "products", component: ProductsComponent},
  {path: "locations", component: LocationsComponent},
  {path: "**", redirectTo: ""},
];
