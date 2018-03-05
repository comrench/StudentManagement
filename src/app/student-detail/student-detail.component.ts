import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentDetailComponent implements OnInit {

  student = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getStudentDetail(this.route.snapshot.params['id']);
  }

  getStudentDetail(id) {
    this.http.get('/student/'+id).subscribe(data => {
      this.student = data;
    });
  }

  deleteStudent(id) {
    this.http.delete('/student/'+id)
      .subscribe(res => {
          this.router.navigate(['/students']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
