import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { UserGuard } from '../guards/user.guard';

const routes:Routes=[
  {
    path:'',
    component:ChatComponent,
    canActivate:[UserGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ChatRoutingModule { }
