import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  student;
  course = {};
  enrollment;
  constructor(private route : ActivatedRoute) { }
  liststudents =[
    {ID:1,FirstMidName:"Carson",LastName:"Alexander",EnrollmentDate: "2005-09-01",Action:""},
    {ID:2,FirstMidName:"Meredith",LastName:"Alonso",EnrollmentDate:  "2002-09-01",Action:""},
    {ID:3,FirstMidName:"Arturo",LastName:"Anand",EnrollmentDate:  "2003-09-01",Action:""},
    {ID:4,FirstMidName:"Gytis",LastName:"Barzdukas",EnrollmentDate:"2002-09-01",Action:""},
    {ID:5,FirstMidName:"Yan",LastName:"Li",EnrollmentDate:"2002-09-01",Action:""},
    {ID:6,FirstMidName:"Peggy",LastName:"Justice",EnrollmentDate:"2001-09-01",Action:""},  
    {ID:7,FirstMidName:"Laura",LastName:"Norman",EnrollmentDate:"2003-09-01",Action:""},
    {ID:8,FirstMidName:"Nino",LastName:"Olivetto",EnrollmentDate:"2005-09-01",Action:""}
    ];
  courses = [
      {id:"1",CourseID:1050,Title:"Chemistry",Credits:3,},
      {id:"2",CourseID:4022,Title:"Python",Credits:3,},
      {id:"3",CourseID:4041,Title:"Macroeconomics",Credits:3,},
      {id:"4",CourseID:1045,Title:"Calculus",Credits:4,},
      {id:"5",CourseID:3141,Title:"DjAngo",Credits:4,},
      {id:"6",CourseID:2021,Title:"Composition",Credits:3,},
      {id:"7",CourseID:2042,Title:"Literature",Credits:4,}
      ];
  enrollments= [
    {
      studentId:1,
      courseId:1050,
      grade:'A'},
  
    {
      studentId:1,
      courseId:4022,
      grade:'C'},
  
    {
      studentId:1,
      courseId:4041,
      grade:'B'},
  
    {
      studentId:2,
      courseId:1045,
      grade:'B'},
  
    {
      studentId:2,
      courseId:3141,
      grade:'F'},
  
    {
      studentId:2,
      courseId:2021,
      grade:'F'},
  
    {
      studentId:3,
      courseId:1050,
      grade:'B'},
  
    {
      studentId:4,
      courseId:1050,
      grade:'B'},
  
    {
      studentId:4,
      courseId:4022,
      grade:'F'},
  
    {
      studentId:5,
      courseId:4041,
      grade:'C'},
  
    {
      studentId:6,
      courseId:1045,
      grade:'B'},
  
    {
      studentId:6,
      courseId:3141,
      grade:'A'},
  
  ];
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'));
     this.student= this.liststudents.filter(student => {
        return student.ID === id;
      })[0];
      
    this.enrollment = this .enrollments.filter(enrollment => {
      return enrollment.studentId === id;
     
      
    });

    for(let i = 0 ; i < this.enrollment.length; ++i ) {
      this.course[this.enrollment[i].courseId] = this.courses.filter(course => {
        return course.CourseID === this.enrollment[i].courseId 
      })[0];
    }

    })
  }

}
