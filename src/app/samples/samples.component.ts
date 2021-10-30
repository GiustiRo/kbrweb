import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  @Input() svgcolor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
