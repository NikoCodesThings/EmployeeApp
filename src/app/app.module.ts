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
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpSearchComponent } from './emp-search/emp-search.component';
import { EmpEditorComponent } from './emp-editor/emp-editor.component';
import {EmployeeEditorComponent} from './employee-editor/employee-editor.component';
import {ViewemployeesComponent} from './viewemployees/viewemployees.component';

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
    EmpListComponent,
    EmpSearchComponent,
    EmpEditorComponent,
    EmployeeEditorComponent,
    ViewemployeesComponent
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
