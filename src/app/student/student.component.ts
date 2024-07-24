import { Component, ViewChild } from '@angular/core';
import { StudentDTO } from '../sharing/Models/StudentDTO';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  displayedColumns: string[] = [
    'Sr.No',
    'firstName',
    'lastName',
    'birthDate',
    'gender',
    'phoneNumber',
    'action',
  ];
  dataSource: StudentDTO[] = [];
  @ViewChild(MatTable) table!: MatTable<StudentDTO>;

  constructor(public dialog: MatDialog) {}
  addStudent(student: StudentDTO | undefined) {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      data: student,
      width: '50%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.addOrReplaceObject(result);
    });
  }

  addOrReplaceObject(student: StudentDTO) {
    const index = this.dataSource.findIndex((obj) => obj.id === student.id);
    if (index !== -1) {
      this.dataSource[index] = student;
      console.log('datasource', this.dataSource);
      this.table.renderRows();
    } else {
      if(typeof(student) == 'object'){
        this.dataSource.push(student);
        console.log('datasource', this.dataSource);
        this.table.renderRows();
      }

    }
  }

  deleteStudent(student: StudentDTO) {
    const index = this.dataSource.findIndex((obj) => obj.id === student.id);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }
}
