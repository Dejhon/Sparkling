import { Component, OnInit } from '@angular/core';
import { AssessService } from 'src/app/Services/assess.service';
import { Assessment } from 'src/app/models/assess';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-assessments',
  templateUrl: './view-assessments.component.html',
  styleUrls: ['./view-assessments.component.css']
})
export class ViewAssessmentsComponent implements OnInit {

  assessments!: Assessment[];
  searchText:any;

  constructor(private assessService: AssessService, private route:Router) { }

  ngOnInit(): void {
    this.getAllAssessments();
  }

  getAllAssessments(){
    this.assessService.getAllAssessment().subscribe(
      allAssessments => this.assessments = allAssessments
    )
  }

  delete(id:any){
    this.assessService.removeAssessment(id).subscribe({
      next:()=>{
        this.getAllAssessments();
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }

}
