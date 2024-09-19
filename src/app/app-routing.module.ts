
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FrogetpasswordComponent } from './frogetpassword/frogetpassword.component';
import { RestaurntComponent } from './restaurnt/restaurnt.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

const routes: Routes = [{
  path:'register',
  component:TemplateDrivenComponentComponent
},{
  path:'forgetpassword',
  component:FrogetpasswordComponent

},
{
  path:'addrestaurant',
  component:RestaurntComponent
},
{
  path:'employee',
  component:EmployeeComponent
},
{
  path:'createaccount',
  component:CreateaccountComponent
},
{
  path:'createatm',
  component:CreateatmComponent
},
{
  path:'withdraw',
  component:WithdrawComponent
},
{
  path:'searchaccount',
  component:LoansearchComponent
},
{ path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //RouterModule only actuall doing module   
  exports: [RouterModule]//transitive dependency
})
export class AppRoutingModule { } // AppRoutingModule depends on RouterModule, it just inform what we will do.
