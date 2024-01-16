import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { LoginComponent } from '@app/login/login.component';
import { NgModule } from '@angular/core';
import { UserComponent } from '@app/user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
