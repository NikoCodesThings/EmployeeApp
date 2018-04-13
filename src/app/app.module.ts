import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EmployeesearchComponent } from './employeesearch/employeesearch.component';
import { EmpeditorComponent } from './empeditor/empeditor.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const appRoutes: Routes= [
  {path: '', component: LoginComponent},
  {path: 'home', component: MainpageComponent},
  {path:'findEmployee', component: ViewemployeeComponent},
  {path: 'editEmployee', component: EditemployeeComponent},
  {path: 'addEmployee', component: AddemployeeComponent},
  {path: 'removeEmployee', component: DeleteemployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmploginComponent,
    LoginComponent,
    MainpageComponent,
    MainmenuComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    DeleteemployeeComponent,
    ViewemployeeComponent,
    EmployeesearchComponent,
    EmpeditorComponent,
    EmployeelistComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
