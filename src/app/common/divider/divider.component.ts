import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() amount: number[] = [1,1,1];
  @Input() svgcolor: string = '';
  @Input() colSize: number = 2;
  @Input() scrollReveal: boolean = true;
  @Input() preRhombs: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
