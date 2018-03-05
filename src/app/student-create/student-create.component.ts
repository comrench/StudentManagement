import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentCreateComponent implements OnInit {

  student = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveStudent() {
    this.http.post('/student', this.student)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/student-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
