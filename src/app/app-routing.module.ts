import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './views/employee/list-employee.component';
import { CreateEmployeeComponent } from './views/employee/create-employee.component';
import { ViewEmployeeComponent } from './views/employee/view-employee.component';


const routes: Routes = [
  { path: 'list', component: ListEmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateEmployeeComponent, ListEmployeeComponent, ViewEmployeeComponent]