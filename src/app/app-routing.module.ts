import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'my-profile',loadChildren:()=>import('./modules/profile-view/profile-view.module').then(m=>m.ProfileViewModule)},
  { path:'',redirectTo:'my-profile',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
