import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  courses = [
    {CourseID:1050,Title:"Chemistry",Credits:3,},
    {CourseID:4022,Title:"Python",Credits:3,},
    {CourseID:4041,Title:"Macroeconomics",Credits:3,},
    {CourseID:1045,Title:"Calculus",Credits:4,},
    {CourseID:3141,Title:"DjAngo",Credits:4,},
    {CourseID:2021,Title:"Composition",Credits:3,},
    {CourseID:2042,Title:"Literature",Credits:4,}
    ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
