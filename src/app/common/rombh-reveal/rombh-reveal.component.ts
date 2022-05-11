import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rombh-reveal',
  templateUrl: './rombh-reveal.component.html',
  styleUrls: ['./rombh-reveal.component.scss']
})
export class RombhRevealComponent implements OnInit {
  @Input() svgcolor: string = '';
  @Input() isSmallscreen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
