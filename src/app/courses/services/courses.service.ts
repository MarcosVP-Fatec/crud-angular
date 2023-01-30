import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  //O import deverá ser no app.module.ts por ser global (root) usando HttpClientModule
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  // Injeção de dependência direto no contrutor do Angular
  constructor(private httpClient: HttpClient) { }

  list() {
    // No lugar de first() pode ser usar o take(1)
    // Assim que o servidor der uma resposta finaliza a inscrição nesta origem de dados.
    return this.httpClient.get<Course[]>(this.API)
               .pipe(
                  first(),
                  delay(5000),
                  tap(courses => console.log(courses))
               );
;
  }
}
