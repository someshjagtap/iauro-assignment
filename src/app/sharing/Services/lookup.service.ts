import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from '../Models/StudentDTO';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  private SERVER_API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  queryStudent(req?: any): Observable<HttpResponse<StudentDTO[]>> {
    return this.http.get<StudentDTO[]>(this.SERVER_API_URL + '/posts', {
      observe: 'response',
    });
  }

  getStudentById(id: number): Observable<HttpResponse<StudentDTO>> {
    return this.http.get<StudentDTO>(this.SERVER_API_URL + '/posts/' + id, {
      observe: 'response',
    });
  }
}
