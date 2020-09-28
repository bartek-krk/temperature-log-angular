import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color1 = "transparent";
  color2 = "transparent";
  color3 = "transparent";

  constructor() { }

  ngOnInit(): void {
  }

}
