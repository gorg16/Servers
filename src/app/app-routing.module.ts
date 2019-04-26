import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServersComponent} from './servers/servers.component';
import {ServerStartComponent} from './servers/server-start/server-start.component';
import {ServerDetailComponent} from './servers/server-detail/server-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {TableComponent} from './servers/table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'servers' , component: ServersComponent, children: [
      {path: '', component: ServerStartComponent},
      {path: ':id', component: ServerDetailComponent},
      // {path: ':id-1', component: TableComponent},

    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
