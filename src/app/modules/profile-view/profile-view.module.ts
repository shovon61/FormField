import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileViewRoutingModule } from './profile-view-routing.module';
import { ProfileViewComponent } from './profile-view.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProfileViewComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent,
    GComponent,
    HComponent,
    IComponent,
    JComponent,
    KComponent,
    LComponent
  ],
  imports: [
    CommonModule,
    ProfileViewRoutingModule,MaterialModule,ReactiveFormsModule,FormsModule
  ]
})
export class ProfileViewModule { }
