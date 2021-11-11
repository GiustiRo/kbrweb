import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() svgcolor: string = '';
  lastScroll = 0;
  @ViewChild('body', {static: true}) body:any;
  constructor() { }

  ngOnInit(): void {
    var count = 0;    
    document.onscroll = (e) => {
      let actualScroll = window.pageYOffset || document.documentElement.scrollTop;      
      if(actualScroll < this.lastScroll){ // scrolled up.
        if (count > 1){
          count--;
        }
      } else if (actualScroll > this.lastScroll){ // scrolled down
        if(count < 255){
          count++;
        }
      }
    }
  }

}
