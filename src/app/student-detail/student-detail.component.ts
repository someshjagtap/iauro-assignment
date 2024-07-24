import { Component } from '@angular/core';
import { StudentDTO } from '../sharing/Models/StudentDTO';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LookupService } from '../sharing/Services/lookup.service';
import { HttpResponse } from '@angular/common/http';
import { OperationService } from '../sharing/Services/operation.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent {
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

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private lookupService: LookupService,
    private operationService: OperationService
  ) {}

  ngOnInit() {
    this.lookupService
      .queryStudent()
      .subscribe((res: HttpResponse<StudentDTO[]>) => {
        this.dataSource = res.body ?? [];
      });
  }

  addStudent() {
    this.router.navigateByUrl('/student-detail/create');
  }
  editStudent(student: StudentDTO) {
    this.router.navigate(['/student-detail/update/', student.id]);
  }

  deleteStudent(student: StudentDTO) {
   this.operationService.deleteStudent(student.id).subscribe((res: HttpResponse<StudentDTO>)=>{
      this.ngOnInit()
      alert("Student deleted successfully");
   }),(error: any)=>{
    alert("Problem");
   }
  }
}
