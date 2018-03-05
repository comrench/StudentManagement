import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentEditComponent implements OnInit {

  student = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params['id']);
  }

  getStudent(id) {
    this.http.get('/student/'+id).subscribe(data => {
      this.student = data;
    });
  }

  updateStudent(id, data) {
    this.http.put('/student/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/student-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
