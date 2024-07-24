import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharingModule } from '../sharing/sharing.module';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentDialogComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharingModule
  ]
})
export class StudentModule { }
