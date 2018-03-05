import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentComponent,
    data: { title: 'Student List' }
  },
  {
    path: 'student-details/:id',
    component: StudentDetailComponent,
    data: { title: 'Student Details' }
  },
  {
    path: 'student-create',
    component: StudentCreateComponent,
    data: { title: 'Create Student' }
  },
  {
    path: 'student-edit/:id',
    component: StudentEditComponent,
    data: { title: 'Edit Student' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
