import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentDTO } from 'src/app/sharing/Models/StudentDTO';
import { OperationService } from 'src/app/sharing/Services/operation.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  studentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private operationService: OperationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      id: undefined,
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      street: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      country: [''],
      enrollmentDate: [''],
      isActive: true,
    });

    this.activatedRoute.data.subscribe(({ studentDetails }) => {
      if (studentDetails != null) {
        this.studentForm.patchValue(studentDetails);
      }
    });
  }

  onSubmit() {
    if (this.studentForm.get('id')?.value == undefined) {
      this.operationService
        .createStudent(this.studentForm.value)
        .subscribe((res: HttpResponse<StudentDTO>) => {
          this.back();
          alert('Student saved successfully');
        }),
        (error: any) => {
          alert(error);
        };
    } else {
      this.operationService
        .updateStudent(this.studentForm.value)
        .subscribe((res: HttpResponse<StudentDTO>) => {
          this.back();
          alert('Student updated successfully');
        }),
        (error: any) => {
          alert(error);
        };
    }
  }

  back(): void {
    this.location.back();
  }
}
