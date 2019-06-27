import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appy-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items: any[] = [
    {artId: '1111'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
