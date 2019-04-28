import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerListComponent } from './servers/server-list/server-list.component';
// @ts-ignore
import { ServerItemComponent } from './servers/server-list/server-item/server-item.component';
import { ServerDetailComponent } from './servers/server-detail/server-detail.component';
import {ServersService} from './servers/servers.service';
import { ServerStartComponent } from './servers/server-start/server-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './servers/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {ChartsComponent} from './servers/server-detail/charts/charts.component';
import { MatDialogComponent } from './servers/server-detail/mat-dialog/mat-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';
import { TableComponent } from './servers/table/table.component';
import { CiCdComponent } from './servers/ci-cd/ci-cd.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {TablesService} from './tables.service';
import { ElipsisPipe } from './elipsis.pipe';
import { LogsDetailsComponent } from './servers/table/logs-details/logs-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerListComponent,
    ServerDetailComponent,
    ServerItemComponent,
    ServerStartComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ServerItemComponent,
    ChartsComponent,
    MatDialogComponent,
    DialogSuccessComponent,
    TableComponent,
    CiCdComponent,
    ElipsisPipe,
    LogsDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule

  ],
  entryComponents: [MatDialogComponent, DialogSuccessComponent, LogsDetailsComponent]
  ,
  providers: [ ServersService, TablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
