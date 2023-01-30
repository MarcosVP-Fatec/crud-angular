import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Observable<Course[]>;
  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService){
    // this.courses = []; Já inicializado acima
    //this.coursesService = new CoursesService();
    // Se fosse inicializar o datasource courses
    // this.courses = this.coursesService.list().subscribe(courses => this.courses = courses);
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void{
    //this.courses = this.coursesService.list();
  }

}
