import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentDTO } from '../Models/StudentDTO';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  private SERVER_API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  createStudent(obj: any): Observable<HttpResponse<StudentDTO>> {
    return this.http
      .post<StudentDTO>(this.SERVER_API_URL + '/posts', obj, {
        observe: 'response',
      })
      .pipe(map((res: HttpResponse<StudentDTO>) => res));
  }

  updateStudent(obj: any): Observable<HttpResponse<StudentDTO>> {
    return this.http
      .put<any>(this.SERVER_API_URL + '/posts/' + obj.id, obj, {
        observe: 'response',
      })
      .pipe(map((res: HttpResponse<StudentDTO>) => res));
  }

  deleteStudent(id: number): Observable<HttpResponse<StudentDTO>> {
    return this.http
      .delete<StudentDTO>(this.SERVER_API_URL + '/posts/' + id, { observe: 'response' })
      .pipe(map((res: HttpResponse<StudentDTO>) => res));
  }
}
