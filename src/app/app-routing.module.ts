import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPgComponent} from "./components/main-pg/main-pg.component";
import {UsersCardComponent} from "./components/users-card/users-card.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:MainPgComponent},
  {path:'users' , component:UsersCardComponent , title:'Users'},
  {path:'Profile/:id'  ,component:UserProfileComponent,title:'Profile'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
