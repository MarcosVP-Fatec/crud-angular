import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  //O import deverá ser no app.module.ts por ser global (root) usando HttpClientModule
  providedIn: 'root'
})
export class CoursesService {

  // Injeção de dependência direto no contrutor do Angular
  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end'}
    ];
  }
}
