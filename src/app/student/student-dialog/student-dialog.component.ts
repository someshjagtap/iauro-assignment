import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentDTO } from 'src/app/sharing/Models/StudentDTO';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css'],
})
export class StudentDialogComponent {
  studentForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentDTO,
    private formBuilder: FormBuilder
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
      postalCode:[''],
      country: [''],
      enrollmentDate: [''],
      isActive: true,
    });

    if (this.data){
      this.studentForm.patchValue(this.data)
    }
  }

  onSubmit() {
    if(this.studentForm.get('id')?.value == undefined){
      this.studentForm.patchValue({
        id: Math.random()
      })
    }
     this.dialogRef.close(this.studentForm.value)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
