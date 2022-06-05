import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { DComponent } from './components/d/d.component';
import { EComponent } from './components/e/e.component';
import { FComponent } from './components/f/f.component';
import { GComponent } from './components/g/g.component';
import { HComponent } from './components/h/h.component';
import { IComponent } from './components/i/i.component';
import { JComponent } from './components/j/j.component';
import { KComponent } from './components/k/k.component';
import { LComponent } from './components/l/l.component';
import { ProfileViewComponent } from './profile-view.component';

const routes: Routes = [
            {
              path:'profile-view',component:ProfileViewComponent,
                    children:[
                      { path:'a',component:AComponent},
                      { path:'b',component:BComponent},
                      { path:'c',component:CComponent},
                      { path:'d',component:DComponent},
                      { path:'e',component:EComponent},
                      { path:'f',component:FComponent},
                      { path:'e',component:EComponent},
                      { path:'g',component:GComponent},
                      { path:'h',component:HComponent},
                      { path:'i',component:IComponent},
                      { path:'j',component:JComponent},
                      { path:'k',component:KComponent},
                      { path:'l',component:LComponent},
                    ]
            },
            { path:'',redirectTo:'profile-view',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileViewRoutingModule { }
