import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-section',
  templateUrl: './end-section.component.html',
  styleUrls: ['./end-section.component.scss']
})
export class EndSectionComponent implements OnInit {
  @Input() svgcolor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
