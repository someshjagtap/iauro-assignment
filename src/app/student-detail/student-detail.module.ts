import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailRoutingModule } from './student-detail-routing.module';
import { StudentDetailComponent } from './student-detail.component';
import { SharingModule } from '../sharing/sharing.module';
import { CreateStudentComponent } from './create-student/create-student.component';


@NgModule({
  declarations: [
    StudentDetailComponent,
    CreateStudentComponent
  ],
  imports: [
    CommonModule,
    StudentDetailRoutingModule,
    SharingModule
  ]
})
export class StudentDetailModule { }
