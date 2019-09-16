import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class trangchuComponent implements OnInit {
  
  config: any;
  student=[];
  constructor() {
    this.config={
      itemsPerPage : 3,
      currentPage : 1,
      totalItems: this.liststudents.length
    };
   }

  liststudents =[
    {ID:"1",FirstMidName:"Carson",LastName:"Alexander",EnrollmentDate: "2005-09-01",Action:""},
    {ID:"2",FirstMidName:"Meredith",LastName:"Alonso",EnrollmentDate:  "2002-09-01",Action:""},
    {ID:"3",FirstMidName:"Arturo",LastName:"Anand",EnrollmentDate:  "2003-09-01",Action:""},
    {ID:"4",FirstMidName:"Gytis",LastName:"Barzdukas",EnrollmentDate:"2002-09-01",Action:""},
    {ID:"5",FirstMidName:"Yan",LastName:"Li",EnrollmentDate:"2002-09-01",Action:""},
    {ID:"6",FirstMidName:"Peggy",LastName:"Justice",EnrollmentDate:"2001-09-01",Action:""},  
    {ID:"7",FirstMidName:"Laura",LastName:"Norman",EnrollmentDate:"2003-09-01",Action:""},
    {ID:"8",FirstMidName:"Nino",LastName:"Olivetto",EnrollmentDate:"2005-09-01",Action:""}
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

    
  ngOnInit() {
    this.student = this.liststudents;
  
}
p;
 Search;
  onDeleteStudent(id) {
     let isDelete = confirm("Are you sure delete this student?")
     if (isDelete) {
      
       let  a =  this.liststudents.filter(student => {
         return student.ID !== id
               })
              
               this.liststudents = [...a];
              
              }
      
            }
          }

