import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild("sec2") sec2!: ElementRef;
  // @ViewChild("sec3") sec3!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(ele:HTMLElement){
    ele.scrollIntoView();
  }

}
