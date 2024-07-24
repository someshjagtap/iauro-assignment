import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { StudentDetailComponent } from './student-detail.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDTO } from '../sharing/Models/StudentDTO';
import { LookupService } from '../sharing/Services/lookup.service';
import { HttpResponse } from '@angular/common/http';
import { map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentResolver implements Resolve<StudentDTO[] | any> {
  constructor(private lookupService: LookupService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.lookupService
        .getStudentById(id)
        .pipe(map((res: HttpResponse<StudentDTO>) => res.body));
    }
    return of(null);
  }
}

const routes: Routes = [
  { path: '', component: StudentDetailComponent },
  { path: 'create', component: CreateStudentComponent },
  {
    path: 'update/:id',
    component: CreateStudentComponent,
    resolve: {
      studentDetails: StudentResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDetailRoutingModule {}
