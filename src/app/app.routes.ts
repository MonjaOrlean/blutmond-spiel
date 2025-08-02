import { Routes } from '@angular/router';
import { WeltkarteComponent } from './weltkarte.component';
import { LoginComponent } from './login/login';
import { CharakterComponent } from './charakter/charakter';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'character', component: CharakterComponent },
  { path: 'weltkarte', component: WeltkarteComponent }
];
