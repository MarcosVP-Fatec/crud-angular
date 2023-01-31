import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ){
    // this.courses = []; Já inicializado acima
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
                    .pipe(
                        catchError(error => {
                          this.onError('Erro ao carregar cursos!');
                          return of([]) //of cria um Observable
                        })
                    );
    // Se fosse inicializar o datasource courses
    // this.courses = this.coursesService.list().subscribe(courses => this.courses = courses);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void{
    //this.courses = this.coursesService.list();
  }

}
